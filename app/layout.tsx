import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./(layout)/Providers";
import Navbar from "./(layout)/Navbar";
import { MdOutlineWhatsapp } from "react-icons/md";
import { cn } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "שיפינג שליחויות",
  description: "שילוח | הפצה | לוגיסטיקה",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "relative min-h-screen") }>
        {/* <Providers> */}
          <Navbar />
          <div className="h-screen pt-20 relative">
            {children}
            </div>
            <a href="https://wa.me/972539231086" className="fixed left-4 bottom-4">
            <MdOutlineWhatsapp className="w-12 h-12 text-green-500 bg-white rounded-full" />
            </a>
        {/* </Providers> */}
        <script src="https://cdn.enable.co.il/licenses/enable-L260270heypcosni-0524-59023/init.js"></script>
      </body>
    </html>
  );
}
