import { cn } from "@nextui-org/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MdOutlineWhatsapp } from "react-icons/md";
import "./globals.css";
import Image from "next/image";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "שיפינג שליחויות",
  description: "שילוח | הפצה | לוגיסטיקה",
  icons: {
    icon: [{ url: "/symbol.png", type: "image/png" }],
  },
  verification: {
    google: "ba7b9d9d962238e6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning={true}>
      <body className={cn(inter.className)} suppressHydrationWarning={true}>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1142440123747409');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image
            height={1}
            width={1}
            alt="Facebook Pixel"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1142440123747409&ev=PageView&noscript=1"
          />
        </noscript>
        <div className="h-screen relative">{children}</div>
        <a
          href="https://wa.me/972527600768?text=היי,%20הגעתי%20דרך%20האתר%20שלכם.%0Aאשמח%20אם%20תוכלו%20לעזור%20לי%20בבקשה%20עם%20העניין%20הבא:"
          className="fixed left-4 bottom-4 z-50"
          aria-label="פתח צ'אט תמיכה"
        >
          <MdOutlineWhatsapp className="w-12 h-12 text-green-500 bg-white rounded-full" />
        </a>
        <Script
          defer
          strategy="afterInteractive"
          src="https://cdn.enable.co.il/licenses/enable-L260270heypcosni-0524-70823/init.js"
        />
        
        {/* Google Analytics - החדש */}
        <GoogleAnalytics gaId="G-C2QFZ18KMD" />
      </body>
    </html>
  );
}