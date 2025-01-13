"use client";

import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import { ScrollParallax } from "react-just-parallax";

export function HeroTestimonials() {
  return (
    <div className="relative">
      <ScrollParallax>
        <div className="h-96 flex items-center justify-center w-full">
          <CardStack items={CARDS} />
        </div>
      </ScrollParallax>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "חני זיאת",
    image: "/assets/clients/client1.png",
    content: (
      <p>
        הנהג תיקשר איתי כשעה לפני ההגעה כמו שביקשתי תיקשר שוב שתי דקות לפני שהגיע כי ביקשתי ממנו שאני ארד לקחת את המשלוח. השמלות נראות איכותיות גם הבד וגם התפירה עדיין לא מדדתי אמדוד בהמשך…האריזה יפייפיה חוויה כייפית
      </p>
    ),
  },
  {
    id: 1,
    name: "Ayelet Barkay",
    image: "/assets/clients/client2.png",
    content: (
      <p>
        הגיע אלי ביום של עומסים מטורפים בכבישים, אבל עדיין הגיע, אפילו שזה היה הרבה מעבר לשעות העבודה שלו.
היה נעים ונחמד, למרות שבטח היה עייף ומתוסכל.
      </p>
    ),
  },
  {
    id: 2,
    name: "Avner Mois Ben Moshe",
    image: "/assets/clients/client3.png",
    content: (
      <p>
        שליח מצויין סובלני. ירא שמים. טוב לבריאות. חברת שליחות כולה חסד. תודה לכם.
      </p>
    ),
  },
  {
    id: 3,
    name: "נחום דוד",
    image: "/assets/clients/client4.png",
    content: (
      <p>
      הנהג שמגיע אלי בקביעות עם חיוך על הפנים, כיף לקבל ממנו משלוחים.
      </p>
    ),
  },
  {
    id: 4,
    name: "Binyomin Designer",
    image: "/assets/clients/client5.png",
    content: (
      <p>
   חברת שליחויות טובה זריזה ויעילה !
בניגוד לחברות אחרות גדולות ככל שיהיו שאני לא יזכיר את שמם, שזורקים חבילות בחדר מדרגות וכן הלאה.

אלופים אתם !!
      </p>
    ),
  },
];


export default HeroTestimonials;