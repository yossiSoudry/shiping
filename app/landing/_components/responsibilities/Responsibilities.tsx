import { MoveDown } from "lucide-react";
import Image from "next/image";

const Responsibilities = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row pt-20">
        <div className="lg:w-1/2 px-4 xl:px-20">
          <div className="max-w-3xl flex flex-col gap-4">
            <div>
              <MoveDown className="size-20 text-sky-800" />
            </div>
            <div className="">
              <h3 className="text-4xl font-light text-right">
                לוקחים אחריות על{" "}
                <span className="text-sky-800 font-bold">הכספים שלכם!</span>
              </h3>
              <h4 className="text-2xl font-semibold text-right mb-2">
                הכסף עובר אליכם ללא עיכובים והפסדים
              </h4>
              <p className="text-lg text-gray-700 text-right">
                {` שירות קבלת הכספים מהלקוחות שלכם כולל מערכת מעקב מתקדמת שמביאה
                סדר ושקיפות לכל שלב בתהליך. אנחנו אוספים את התשלומים – בצ'קים או
                במזומן – ומבצעים קיזוז וחישוב מדויק של עלות המשלוח. בסוף כל
                חודש, תקבלו דו”ח מסודר עם כל הנתונים, כך שתמיד תדעו כמה כסף
                התקבל ומה מגיע לכם, עם תהליך ברור ומדויק ונטול טעויות.`}
              </p>
            </div>

            <div>
              <MoveDown className="size-20 text-sky-800" />
            </div>
            <div className="">
              <h3 className="text-4xl font-light text-right">
                לוקחים אחריות על{" "}
                <span className="text-sky-800 font-bold">התכולה שלכם!</span>
              </h3>
              <h4 className="text-2xl font-semibold text-right mb-2">
                מוצר שביר או רגיש לחום?
              </h4>
              <p className="text-lg text-gray-700 text-right">
                מוצרים שבירים זוכים לאזור מיוחד במשאית המגן עליהם מתנועות
                ופגיעות, בעוד שמוצרים רגישים לחום נשמרים באזורים מאווררים
                במשאיות גבוהות, הרחק ממעמקי המשאית. אנו מקפידים על טיפול מקצועי
                ומותאם לכל סוג משלוח, כדי שהתכולה שלכם תגיע ליעד במצב תקין
                ובשלמותה.
              </p>
            </div>

            <div>
              <MoveDown className="size-20 text-sky-800" />
            </div>
            <div>
              <h3 className="text-4xl font-light text-right">
                לוקחים אחריות על{" "}
                <span className="text-sky-800 font-bold">השירות שלכם!</span>
              </h3>
              <h4 className="text-2xl font-semibold text-right mb-2">
                לוקחים אישית את הלקוחות שלכם
              </h4>
              <p className="text-lg text-gray-700 text-right">
                אנו מבינים שהלקוחות שלכם רואים בנו חלק בלתי נפרד מהשירות שלכם.
                לכן, אנו שמים דגש על מתן מענה אדיב, מקצועי ומהיר עבורם ומפנים
                אליכם פניות שקשורות אליכם ולא נותנים לפניות ליפול כי זה ‘לא
                אחריות שלנו’. שמירה על רמת שירות שתואמת את הסטנדרטים של העסק
                שלכם ומייצגת אותכם בנאמנות.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-end relative pt-20 lg:pr-20">
          <div className="relative w-full lg:h-[642px] lg:w-[592px]">
            {/* תמונה ראשית - במחשב בדיוק כמו המקור */}
            <Image
              className="lg:rounded-r-[52px] lg:rounded-l-none lg:absolute lg:top-0 lg:right-0 lg:object-cover
                 w-full rounded-[32px] md:rounded-[52px]" // סגנון למובייל
              width={592}
              height={642}
              alt=""
              src="/driver-1.png"
            />

            {/* תמונה קטנה - במחשב בדיוק כמו המקור */}
            <div
              className={`
      lg:rounded-[52px] lg:absolute lg:-top-20 lg:-right-20 lg:w-[286px] lg:h-[286px]
      absolute w-[200px] aspect-square left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0
      -bottom-[100px] lg:bottom-auto z-[1]
    `}
            >
              <Image
                className="rounded-[52px] object-cover w-full h-full"
                loading="lazy"
                width={286}
                height={286}
                alt=""
                src="/driver-2.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-20">
        <h3 className="text-4xl text-black text-center p-4">
          הלקוחות שלנו כבר יודעים, אחריות זה שם המשחק בלהיות הכי טובים
        </h3>
        <div className="container mx-auto flex justify-between items-center mt-10 gap-10">
          <div className="">
            <Image
              className="w-[378px] h-[14.7px] relative max-sm:hidden"
              loading="lazy"
              width={378}
              height={15}
              alt=""
              src="/arrow-6.svg"
            />
          </div>
          <h1 className="text-sky-800 font-light text-6xl lg:text-nowrap">
            ואנחנו יודעים לקחת אחריות!
          </h1>
          <div className="">
            <Image
              className="w-[378px] h-[14.7px] relative rotate-180"
              loading="lazy"
              width={378}
              height={15}
              alt=""
              src="/arrow-6.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsibilities;
