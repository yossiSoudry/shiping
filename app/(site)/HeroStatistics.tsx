"use client";

import CountUp from 'react-countup';

export default function HeroStatistics() {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-900/90 to-blue-700">
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
              end={1500}
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
  );
}