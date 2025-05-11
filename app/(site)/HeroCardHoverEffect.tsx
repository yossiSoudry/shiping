'use client';

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Package, Headphones, Truck, Cpu, Link, MapPin } from "lucide-react";

export function CardHoverEffect() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    icon: <Headphones size={40} strokeWidth={1.5} />,
    title: "שירות 24/6",
    description: "אנחנו זמינים סביב השעון לכל פניה שלכם ושל הלקוחות שלכם",
  },
  {
    icon: <Package size={40} strokeWidth={1.5} />,
    title: "מענה אישי",
    description: "טיפול מותאם אישית לכל לקוח עם מענה אנושי וחם",
  },
  {
    icon: <Truck size={40} strokeWidth={1.5} />,
    title: "פריסה ארצית",
    description: "משלוחים לכל נקודה בארץ, מקריית שמונה ועד אילת",
  },
  {
    icon: <Cpu size={40} strokeWidth={1.5} />,
    title: "טכנולוגיה מתקדמת",
    description: "מערכת חכמה להזנת משלוחים ומעקב בזמן אמת",
  },
  {
    icon: <Link size={40} strokeWidth={1.5} />,
    title: "אינטגרציה מלאה",
    description: "התממשקות עם כל פלטפורמות האיקומרס המובילות",
  },
  {
    icon: <MapPin size={40} strokeWidth={1.5} />,
    title: "מעקב חי",
    description: "מעקב בזמן אמת אחר כל משלוח עם עדכונים שוטפים",
  },
];