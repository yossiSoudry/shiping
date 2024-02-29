import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./(layout)/Providers";
import Navbar from "./(layout)/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shipping",
  description: "שילוח | הפצה | לוגיסטיקה",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Providers> */}
          <Navbar />
          <div className="container h-screen p-4 pt-20">{children}</div>
        {/* </Providers> */}
      </body>
    </html>
  );
}
