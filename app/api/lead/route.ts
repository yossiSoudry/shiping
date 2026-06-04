// app/api/lead/route.ts
import { NextRequest, NextResponse } from "next/server";

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

const SHIPNEST_URL =
  process.env.SHIPNEST_LEADS_URL ?? "https://shipnest.io/api/public/leads";
const SHIPNEST_TOKEN = process.env.SHIPNEST_LEAD_TOKEN;

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      businessName,
      phone,
      email,
      city,
      notes,
      source,
      captchaToken,
    } = await req.json();

    // ולידציה מינימלית – שאר הולידציה מטופלת ב-ShipNest
    if (!name || !phone) {
      return NextResponse.json(
        { error: "חסרים פרטי טופס" },
        { status: 400 }
      );
    }

    if (!captchaToken) {
      return NextResponse.json(
        { error: "אימות reCAPTCHA חסר" },
        { status: 400 }
      );
    }

    if (!RECAPTCHA_SECRET) {
      console.error("RECAPTCHA_SECRET_KEY is missing");
      return NextResponse.json(
        { error: "שגיאת הגדרות בשרת" },
        { status: 500 }
      );
    }

    if (!SHIPNEST_TOKEN) {
      console.error("SHIPNEST_LEAD_TOKEN is missing");
      return NextResponse.json(
        { error: "שגיאת הגדרות בשרת" },
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
        { error: "אימות reCAPTCHA נכשל" },
        { status: 400 }
      );
    }

    // שליחה ישירה ל-CRM (ShipNest) – הוא שמטפל בהמשך (מייל וכו')
    const crmRes = await fetch(SHIPNEST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: SHIPNEST_TOKEN,
        name,
        businessName: businessName ?? "",
        phone,
        email: email ?? "",
        city: city ?? "",
        notes: notes ?? "",
        source: source ?? req.headers.get("host") ?? "",
      }),
    });

    const crmData = await crmRes.json().catch(() => null);

    // העברת קוד הסטטוס של ShipNest כפי שהוא (כולל 429) כדי שהלקוח יטפל נכון
    if (!crmRes.ok) {
      console.error("ShipNest lead error:", crmRes.status, crmData);
      return NextResponse.json(
        { error: crmData?.error || "שגיאה בשליחת הליד" },
        { status: crmRes.status }
      );
    }

    // success: { success: true, leadId } או { success: true, duplicate: true }
    return NextResponse.json(
      { success: true, leadId: crmData?.leadId, duplicate: crmData?.duplicate },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json({ error: "שגיאה בשרת" }, { status: 500 });
  }
}
