// app/api/lead/route.ts
import { NextRequest, NextResponse } from "next/server";

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

const MAKE_WEBHOOK_URL =
  "https://hook.eu2.make.com/6nsscn50dbfjcn754cuuqe4nohkmwosq";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, captchaToken } = await req.json();

    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, message: "חסרים פרטי טופס" },
        { status: 400 }
      );
    }

    if (!captchaToken) {
      return NextResponse.json(
        { success: false, message: "אימות reCAPTCHA חסר" },
        { status: 400 }
      );
    }

    if (!RECAPTCHA_SECRET) {
      console.error("RECAPTCHA_SECRET_KEY is missing");
      return NextResponse.json(
        { success: false, message: "שגיאת הגדרות בשרת" },
        { status: 500 }
      );
    }

    // אימות reCAPTCHA מול גוגל
    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: RECAPTCHA_SECRET,
          response: captchaToken,
        }),
      }
    );

    const verifyData = await verifyRes.json();

    // אם יש score (v3) – נוודא שהוא מעל 0.5
    if (
      !verifyData.success ||
      (typeof verifyData.score === "number" && verifyData.score < 0.5)
    ) {
      return NextResponse.json(
        { success: false, message: "אימות reCAPTCHA נכשל" },
        { status: 400 }
      );
    }

    // אם עברנו את ה־Captcha – שליחה ל-Make
    const makeRes = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email }),
    });

    if (!makeRes.ok) {
      console.error("Error sending to Make:", await makeRes.text());
      return NextResponse.json(
        { success: false, message: "שגיאה בשליחת הליד לאוטומציה" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      { success: false, message: "שגיאה בשרת" },
      { status: 500 }
    );
  }
}
