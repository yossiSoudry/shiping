import { MdOutlineWhatsapp } from "react-icons/md";
import Navbar from "./(layout)/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="h-screen pt-20 relative">{children}</div>
      <a
        href="https://wa.me/972527600768?text=היי,%20הגעתי%20דרך%20האתר%20שלכם.%0Aאשמח%20אם%20תוכלו%20לעזור%20לי%20בבקשה%20עם%20העניין%20הבא:"
        className="fixed left-4 bottom-4 z-50"
        aria-label="פתח צ'אט תמיכה"
      >
        <MdOutlineWhatsapp className="w-12 h-12 text-green-500 bg-white rounded-full" />
      </a>
    </div>
  );
}
