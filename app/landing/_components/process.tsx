import type { NextPage } from "next";
import { GoArrowLeft } from "react-icons/go";
import LidForm from "./LidForm";

export type ProcessType = {
  className?: string;
};

const Process: NextPage<ProcessType> = ({ className = "" }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row items-end justify-start flex-wrap content-end gap-[31px] max-w-full mq900:gap-[15px]">
        <div className="flex-1 flex flex-row items-center justify-center gap-10">
          <div className="flex items-center gap-6">
            <span>
              <GoArrowLeft className="size-12 text-orange-300" />
            </span>
            <p className="text-6xl font-semibold text-sky-800">איחסון</p>
          </div>
          <div className="flex items-center gap-6">
            <span>
              <GoArrowLeft className="size-12 text-orange-300" />
            </span>
            <p className="text-6xl font-semibold text-sky-800">קבלת הזמנה</p>
          </div>
          <div className="flex items-center gap-6">
            <span>
              <GoArrowLeft className="size-12 text-orange-300" />
            </span>
            <p className="text-6xl font-semibold text-sky-800">אריזה ושילוח</p>
          </div>
        </div>
      </div>
      <div className="text-slate-950 max-w-2xl text-center text-lg py-10">
        אנחנו כאן כדי לקחת ממך את כל הטיפול הלוגיסטי. נאחסן את הסחורה שלך במחסן
        המסודר שלנו, נקבל את ההזמנות ישירות במערכות שלנו, נארוז בקפידה ונשלח
        ללקוחות שלך. אנחנו מומחים בטיפול בפרויקטים חד פעמיים כמו חלוקת מתנות
        לעובדים, משלוח ערכות לכנסים או אירועים מיוחדים. בין אם זה פרויקט חד פעמי
        או פעילות שוטפת - אנחנו נדאג לכל הלוגיסטיקה{" "}
        <b>ואתה תוכל להתרכז בניהול העסק שלך.</b>
      </div>
      <div className="flex flex-col items-center justify-center w-full relative">
        <div className="bg-sky-800 w-full p-20 text-white relative h-[400px]">
          <h2 className="text-5xl font-extralight mb-20 text-center">למי שירות E2E מתאים?</h2>
          <div className="flex items-start justify-between gap-10 xl:px-20">
            <div className="w-1/4">
              <h3 className="text-3xl font-semibold">בעלי חנויות אונליין</h3>
              <p>
                פתרון קבוע לאחסון וטיפול במשלוחים היומיומיים, בלי הצורך בניהול
                מחסן וצוות אריזה.
              </p>
            </div>
            <div className="w-1/4">
              <h3 className="text-3xl font-semibold">מנהלי רכש בארגונים</h3>
              <p>
                פתרון מקצועי לפרויקטים מיוחדים כמו חלוקת שי לעובדים, ערכות
                לכנסים ואירועים תקופתיים.
              </p>
            </div>
            <div className="w-1/4">
              <h3 className="text-3xl font-semibold">יבואנים וסוכנים</h3>
              <p>
                שירותי אחסון בטוח לסחורה וטיפול מלא בהפצה ללקוחות ולנקודות
                המכירה.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <LidForm title />
        </div>

        <div className="bg-orange-200 w-full p-20 text-white relative flex justify-center h-[400px]">
          <div className="flex items-start justify-start gap-6 flex-col w-fit">
            <h2 className="text-sky-800 text-5xl font-semibold mt-10">מערכת</h2>
            <h2 className="text-sky-800 text-5xl font-extralight">
              ALL-IN-ONE
            </h2>
            <h2 className="text-white text-3xl font-bold">
              פלטפורמה דיגיטלית חכמה
            </h2>
            <h2 className="text-white text-3xl font-bold">
              לניהול מושלם של המשלוחים
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
