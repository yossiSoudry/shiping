"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "2016:",
    description:
      "הקמנו את שיפינג, חברת שילוח צעירה ורעננה, עם חזון גדול: להפוך את עולם הלוגיסטיקה ליעיל, פשוט ונגיש. התחלנו בצעדים קטנים, צוברים ניסיון וידע תוך כדי תנועה.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/about/2016.jpg"
          alt="2016"
          width="600"
          height="320"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "2017:",
    description:
      "הבנו ששירות לקוחות הוא לא רק מילת מפתח, אלא אבן יסוד להצלחה. שמנו דגש על בניית מערך שירות לקוחות יוצא דופן, זמין ומקצועי, תוך הקשבה לצרכים הייחודיים של כל לקוח.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/about/2017.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "2018:",
    description:
      "הרחבנו את פעילותנו והשקענו במיטב הטכנולוגיות והפתרונות הלוגיסטיים. הקמנו מערך הפצה יעיל, המאפשר לנו לספק שירות מהיר ומדויק לכל רחבי הארץ.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/about/2018.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "2019:",
    description:
      "הצלחתנו משכה אלינו לקוחות רבים, ביניהם חברות מובילות במשק. הפכנו לשותף אסטרטגי עבור עסקים רבים, תורמים להצלחתם וצמיחתם.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/about/2019.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "2020:",
    description:
      "משבר הקורונה הציב בפנינו אתגרים רבים, אך גם הזדמנויות. פיתחנו פתרונות חדשניים להתמודדות עם המצב, תוך שמירה על רציפות השירות והקפדה על בריאות לקוחותינו ועובדינו.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/about/2020.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "2021:",
    description:
      "היום, שיפינג היא חברת שילוח מובילה, המציעה מגוון רחב של פתרונות לוגיסטיים מתקדמים. אנו ידועים בזכות השירות האדיב והמקצועי, היעילות והאמינות, והמחירים התחרותיים.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/about/2021.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "2022 ואילך:",
    description:
      "אנו ממשיכים לצמוח ולהתפתח, תוך חתירה מתמדת למצוינות. אנו מחויבים להוביל את עולם הלוגיסטיקה קדימה, תוך מתן מענה מושלם לצרכים המשתנים של לקוחותינו.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/about/2022.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
const StoryAboutUs = () => {
  return (
    <div className="flex flex-col items-center gap-10 pt-10">
      <h2 className="text-4xl text-center font-sans font-semibold text-orange-500">
        שיפינג: מסע בזמן בין אבני הדרך לחזון...
      </h2>
      <div className="flex justify-center items-center">
        <StickyScroll content={content} />
      </div>
      <h2 className="text-4xl max-w-4xl text-center font-sans font-semibold text-blue-500">
      שיפינג - הדרך המהירה, היעילה והנוחה ביותר לשלוח את החבילות שלך!
      </h2>
    </div>
  );
};

export default StoryAboutUs;
