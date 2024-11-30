'use client'
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Container } from "lucide-react";
import { FaShippingFast } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdEco, MdFollowTheSigns } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: <Container className="w-20 h-20" />,
    description:
      "בגלל השירות. אנחנו זמינים סביב השעון לכל פניה שלכם ושל הלקוחות שלכם",
  },
  {
    icon: <RiServiceFill className="w-20 h-20" />,
    description:
      "מענה אישי ואנושי ללקוחות שלכם",
  },
  {
    icon: <FaShippingFast className="w-20 h-20" />,
    description:
      "פריסה ארצית מקצה לקצה. נמסור את החבילות שלך בכל נקודה בארץ",
  },
  {
    icon: <GrTechnology className="w-20 h-20" />,
    description:
      "טכנולוגיה מתקדמת להזנת משלוחים ולמעקב אחריהם.",
  },
  {
    icon: <MdEco className="w-20 h-20" />,
    description:
      "התממשקות עם כלל אתרי האיקומרס.",
  },
  {
    icon: <MdFollowTheSigns className="w-20 h-20" />,
    description:
      "מעקב אחרי המשלוחים בזמן אמת. תמיכה במערכות ניהול מלאי ומערכות ניהול חבילות.",
  },
];
