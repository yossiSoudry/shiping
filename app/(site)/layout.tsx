import { cn } from "@nextui-org/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MdOutlineWhatsapp } from "react-icons/md";
import "../globals.css";
import Navbar from "./(layout)/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "שיפינג שליחויות",
  description: "שילוח | הפצה | לוגיסטיקה",
  icons: {
    icon: [{ url: "/symbol.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className
          // "relative min-h-screen"
        )}
      >
        {/* <Providers> */}
        <Navbar />
        <div className="h-screen pt-20 relative">{children}</div>
        <a
          href="https://wa.me/972527600768?text=היי,%20הגעתי%20דרך%20האתר%20שלכם.%0Aאשמח%20אם%20תוכלו%20לעזור%20לי%20בבקשה%20עם%20העניין%20הבא:"
          className="fixed left-4 bottom-4 z-50"
          aria-label="פתח צ'אט תמיכה"
        >
          <MdOutlineWhatsapp className="w-12 h-12 text-green-500 bg-white rounded-full" />
        </a>
        {/* </Providers> */}
        <script
          defer
          src="https://cdn.enable.co.il/licenses/enable-L260270heypcosni-0524-59023/init.js"
        ></script>
      </body>
    </html>
  );
}
