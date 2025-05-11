"use client";

import CountUp from 'react-countup';

export default function HeroStatistics() {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          שיפינג במספרים
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <CountUp
              end={100}
              duration={2.5}
              suffix="+"
              className="text-5xl font-bold text-orange-400"
            />
            <div className="text-xl text-white mt-2">רכבי משלוח</div>
          </div>
          <div className="text-center">
            <CountUp
              end={10000}
              duration={2.5}
              suffix="+"
              className="text-5xl font-bold text-orange-400"
            />
            <div className="text-xl text-white mt-2">לקוחות מרוצים</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-400">24/6</div>
            <div className="text-xl text-white mt-2">שירות זמין</div>
          </div>
          <div className="text-center">
            <CountUp
              end={98}
              duration={2.5}
              suffix="%"
              className="text-5xl font-bold text-orange-400"
            />
            <div className="text-xl text-white mt-2">דיוק במשלוחים</div>
          </div>
        </div>
      </div>
    </div>
  );
}