"use client";

import React from "react";
import {
  FaMapMarkedAlt,
  FaUserFriends,
  FaRocket,
  FaMobileAlt,
  FaTree,
  FaWarehouse,
} from "react-icons/fa";

const OurServicesStory = () => {
  return (
    <div className="mt-20 bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute transform rotate-45 -left-40 -top-40 w-80 h-80 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="absolute transform rotate-45 -right-40 -bottom-40 w-80 h-80 bg-blue-900 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-900 mb-8 animate-fade-in">
            השירותים שלנו
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            דמיינו עולם שבו כל משלוח מגיע ליעדו במהירות ובדיוק מירבי, ללא עיכובים
            וללא דאגות. אנחנו הופכים את החזון הזה למציאות.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 opacity-0 animate-fade-in-up`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards',
                }}
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center group-hover:from-blue-900 group-hover:to-blue-800 transition-all duration-300">
                    <service.icon className="w-10 h-10 text-white transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 text-right">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-right leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            למה לבחור בנו?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            אנחנו מציעים שילוב מנצח של מהירות, אמינות ושירות אישי. עם מחויבות
            לאיכות ושימוש בטכנולוגיות המתקדמות ביותר, אנחנו מבטיחים שהמשלוחים שלכם
            יגיעו ליעדם בזמן ובשלמות.
          </p>
          <button className="bg-orange-400/90 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            בואו נתחיל
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg opacity-0 animate-fade-in group hover:border-2 hover:border-orange-400 transition-all duration-300"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'forwards',
                }}
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave Section */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="absolute top-0 left-0 right-0 h-20 bg-blue-900/5 transform -skew-y-3"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">
            מוכנים להתחיל?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            הצטרפו לאלפי לקוחות מרוצים שכבר נהנים משירות המשלוחים הטוב ביותר
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-orange-400/90 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              התחל עכשיו
            </button>
            <button className="bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              צור קשר
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    icon: FaMapMarkedAlt,
    title: "שירות מקיף בכל הארץ",
    description:
      "בכל פינה ובכל רחוב, שירות המשלוחים שלנו זמין עבורכם. בין אם אתם גרים בעיר הגדולה או בכפר קטן, אנחנו מגיעים לכל מקום.",
  },
  {
    icon: FaUserFriends,
    title: "תמיכה מותאמת אישית",
    description:
      "עבורנו, אתם לא רק לקוחות. אתם שותפים לדרך. הצוות שלנו זמין תמיד לתת מענה אישי ואנושי.",
  },
  {
    icon: FaRocket,
    title: "משלוחים מהירים במיוחד",
    description:
      "עם שירות משלוחים מהיר במיוחד, אנחנו דואגים שהחבילות שלכם יגיעו ליעדן במהירות שיא.",
  },
  {
    icon: FaMobileAlt,
    title: "טכנולוגיה מתקדמת",
    description:
      "בזכות הטכנולוגיה המתקדמת שלנו, אתם יכולים לעקוב אחרי המשלוחים בזמן אמת ולנהל את המשלוחים בצורה חכמה.",
  },
  {
    icon: FaTree,
    title: "מחויבות לסביבה",
    description:
      "אנחנו מחויבים לשמור על הסביבה. הפעילות שלנו מתבצעת בצורה ירוקה ומקיימת, כדי שנוכל להבטיח עתיד טוב יותר.",
  },
  {
    icon: FaWarehouse,
    title: "שירותי אחסנה",
    description:
      "אנו מציעים שירותי אחסנה מתקדמים. אתם יכולים לאחסן אצלנו את הסחורה שלכם, ואנחנו נדאג להפיץ אותה ביעילות.",
  },
];

const stats = [
  { value: "1.2K", label: "מדרגים אותנו 5 כוכבים בגוגל" },
  { value: "24/6", label: "שירות זמין" },
  { value: "1,000+", label: "בתי עסק מרוצים" },
];

export default OurServicesStory;