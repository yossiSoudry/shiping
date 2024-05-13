import React from "react";
import {
  FaMapMarkedAlt,
  FaUserFriends,
  FaRocket,
  FaMobileAlt,
  FaTree,
  FaClipboardList,
  FaWarehouse,
} from "react-icons/fa";

const OurServicesStory = () => {
  return (
    <div className="text-center p-8 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      <h1 className="text-5xl font-bold text-gray-800 mb-10">השירותים שלנו</h1>
      <div className="space-y-10 max-w-4xl mx-auto text-lg text-gray-700">
        <p>
          דמיינו עולם שבו כל משלוח מגיע ליעדו במהירות ובדיוק מירבי, ללא עיכובים
          וללא דאגות. בעולם הזה, חברתנו מתפקדת כלב הפועם של רשת המשלוחים, מחברת
          בין אנשים, עסקים וקהילות בכל רחבי הארץ.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <service.icon className="w-16 h-16 text-blue-600 mb-4 mx-auto animate-bounce" />
              <h2 className="text-2xl font-semibold my-4">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          למה לבחור בנו?
        </h2>
        <p className="text-gray-700 text-lg">
          אנחנו מציעים שילוב מנצח של מהירות, אמינות ושירות אישי. עם מחויבות
          לאיכות ושימוש בטכנולוגיות המתקדמות ביותר, אנחנו מבטיחים שהמשלוחים שלכם
          יגיעו ליעדם בזמן ובשלמות. בחרו בנו ותיהנו משירות ללא תחרות!
        </p>
      </div>
    </div>
  );
};

const services = [
  {
    icon: FaMapMarkedAlt,
    title: "שירות מקיף בכל הארץ",
    description:
      "בכל פינה ובכל רחוב, שירות המשלוחים שלנו זמין עבורכם. בין אם אתם גרים בעיר הגדולה או בכפר קטן, אנחנו מגיעים לכל מקום, בכל זמן.",
  },
  {
    icon: FaUserFriends,
    title: "תמיכה מותאמת אישית",
    description:
      "עבורנו, אתם לא רק לקוחות. אתם שותפים לדרך. הצוות שלנו זמין תמיד לתת מענה אישי ואנושי, ולהבטיח שהמשלוחים שלכם יגיעו בצורה הטובה ביותר.",
  },
  {
    icon: FaRocket,
    title: "משלוחים מהירים במיוחד",
    description:
      "עם שירות משלוחים מהיר במיוחד, אנחנו דואגים שהחבילות שלכם יגיעו ליעדן במהירות שיא. כל דקה חשובה, ואנחנו כאן כדי לוודא שאתם לא תפספסו אף רגע.",
  },
  {
    icon: FaMobileAlt,
    title: "טכנולוגיה מתקדמת",
    description:
      "בזכות הטכנולוגיה המתקדמת שלנו, אתם יכולים לעקוב אחרי המשלוחים בזמן אמת, לדעת בדיוק איפה החבילה שלכם נמצאת, ולנהל את המשלוחים בצורה חכמה ויעילה.",
  },
  {
    icon: FaTree,
    title: "מחויבות לסביבה",
    description:
      "אנחנו מחויבים לשמור על הסביבה. הפעילות שלנו מתבצעת בצורה ירוקה ומקיימת, כדי שנוכל להבטיח עתיד טוב יותר לכולנו.",
  },
//   {
//     icon: FaClipboardList,
//     title: "ניהול מתקדם",
//     description:
//       "מערכות הניהול המתקדמות שלנו מאפשרות לכם לשלוט בכל היבט של תהליך המשלוחים, ולהבטיח שהכול מתנהל בצורה חלקה ויעילה.",
//   },
  {
    icon: FaWarehouse,
    title: "שירותי אחסנה",
    description:
      "בנוסף, אנו מציעים שירותי אחסנה מתקדמים. אתם יכולים לאחסן אצלנו את הסחורה שלכם, וכשמתקבלת הזמנה, אנחנו דואגים להוציא אותה ולהפיץ במהירות וביעילות.",
  },
];

export default OurServicesStory;
