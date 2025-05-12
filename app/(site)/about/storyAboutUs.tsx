"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import CountUp from "react-countup";

const content = [
  {
    title: "2016:",
    description:
      "הקמנו את שיפינג, חברת שילוח צעירה ורעננה, עם חזון גדול: להפוך את עולם הלוגיסטיקה ליעיל, פשוט ונגיש. התחלנו בצעדים קטנים, צוברים ניסיון וידע תוך כדי תנועה.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/assets/about/2016.jpg"
          alt="2016"
          width={600}
          height={320}
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
      <div className="h-full w-full flex items-center justify-center text-white">
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
      <div className="h-full w-full flex items-center justify-center text-white">
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
      <div className="h-full w-full flex items-center justify-center text-white">
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
      <div className="h-full w-full flex items-center justify-center text-white">
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
      <div className="h-full w-full flex items-center justify-center text-white">
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
      <div className="h-full w-full flex items-center justify-center text-white">
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
    <div className="min-h-screen">
      {/* Hero Section - שקוף כדי לראות את הרקע */}
      <div className="py-12 px-4 text-center bg-blue-900/30">
        <h1 className="text-5xl mt-20 font-bold text-white mb-6 drop-shadow-lg">
          הסיפור שלנו: מסע של חזון, חדשנות והצלחה
        </h1>
        <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
          מאז 2016, אנחנו כותבים היסטוריה בעולם הלוגיסטיקה הישראלית. 
          הצטרפו אלינו למסע מרתק דרך אבני הדרך שהפכו אותנו למובילים בתחום.
        </p>
      </div>

      {/* Timeline Section - רקע חצי שקוף */}
      <div className=" ">
        <div className="w-full">
          <StickyScroll content={content} />
        </div>
      </div>

      {/* Stats Section - חצי שקוף */}
      <div className="py-20 bg-blue-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          שיפינג במספרים
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <CountUp
              end={1000}
              start={1}
              duration={2.5}
              suffix="+"
              className="text-5xl font-bold text-orange-400"
            />
            <div className="text-xl text-white mt-2">בתי עסק מרוצים</div>
          </div>
          <div className="text-center">
            <CountUp
              end={1200}
              start={1}
              duration={2.5}
              suffix="+"
              className="text-5xl font-bold text-orange-400"
            />
            <div className="text-xl text-white mt-2">מדרגים אותנו 5 כוכבים בגוגל</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-400">24/6</div>
            <div className="text-xl text-white mt-2">שירות זמין</div>
          </div>
          {/* <div className="text-center">
            <CountUp
              end={98}
              duration={2.5}
              suffix="%"
              className="text-5xl font-bold text-orange-400"
            />
            <div className="text-xl text-white mt-2">דיוק במשלוחים</div>
          </div> */}
        </div>
      </div>
      </div>

      {/* Vision Section - חצי שקוף */}
      <div className="py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            החזון שלנו לעתיד
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            אנחנו לא עוצרים לרגע. החזון שלנו הוא להמשיך ולהוביל את מהפכת הלוגיסטיקה בישראל, 
            תוך שילוב טכנולוגיות מתקדמות, קיימות סביבתית ושירות לקוחות שאין שני לו.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-orange-500 mb-4">טכנולוגיה חכמה</h3>
              <p className="text-gray-700">
                השקעה מתמדת ב-AI ובאוטומציה למיטוב מסלולים וחיזוי ביקושים
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-orange-500 mb-4">קיימות ירוקה</h3>
              <p className="text-gray-700">
                מעבר לצי רכבים חשמלי והפחתת טביעת הרגל הפחמנית שלנו
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-orange-500 mb-4">שירות מנצח</h3>
              <p className="text-gray-700">
                הרחבת שעות הפעילות ל-24/7 ושיפור מתמיד של חווית הלקוח
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - חצי שקוף */}
      <div className="py-20 bg-gradient-to-br from-orange-500/80 to-orange-400/80 backdrop-blur-sm text-white text-center">
        <h2 className="text-4xl font-bold mb-8 drop-shadow-lg">
          בואו להיות חלק מהסיפור שלנו
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          אנחנו תמיד מחפשים שותפים חדשים להצלחה. בין אם אתם עסק שמחפש פתרון לוגיסטי מושלם 
          או אדם מוכשר שרוצה להצטרף לצוות שלנו - מקומכם איתנו.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
            הצטרפו כלקוחות
          </button>
          <button className="bg-blue-900 text-white hover:bg-blue-800 font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
            קריירה בשיפינג
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryAboutUs;