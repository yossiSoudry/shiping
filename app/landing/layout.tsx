import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "שיפינג שליחויות",
  description: "שילוח | הפצה | לוגיסטיקה",
  icons: {
    icon: [{ url: "/symbol.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
