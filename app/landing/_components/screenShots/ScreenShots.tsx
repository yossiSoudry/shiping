import Image from "next/image";

const ScreenShots = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row container pt-20">
        <div className="lg:w-1/2 relative flex items-end">
          <div className="flex lg:flex-col items-end justify-center lg:justify-start absolute -top-96 w-full lg:left-[30%]">
            <Image
              className="object-contain z-[3] hidden lg:block"
              width={280}
              height={500}
              alt=""
              src="/smartphone.png"
            />
            <Image
              className="object-contain z-[3] lg:hidden"
              width={160}
              height={200}
              alt=""
              src="/smartphone.png"
            />
            <Image
              className="object-contain z-[4] hidden lg:block"
              loading="lazy"
              width={124}
              height={99}
              alt=""
              src="/arrow-4.png"
            />
            <Image
              className="object-contain z-[4] lg:hidden rotate-90 scale-x-[-1]"
              loading="lazy"
              width={124}
              height={99}
              alt=""
              src="/arrow-4.png"
            />
          </div>
        </div>
        <div className="flex lg:w-1/2 flex-col gap-4 max-lg:mx-auto lg:ml-auto max-w-fit pt-10">
          <p className="text-4xl text-sky-800 font-bold">
            מעקב אחרי המשלוח בזמן אמת
          </p>
          <p className="text-4xl">עבור מקבל החבילה ועבור השולח</p>
          <ul className="text-xl leading-9 list-disc px-8">
            <li>עדכון רציף על מצב המשלוח</li>
            <li>התרעות SMS לאורך כל התהליך</li>
            <li>חתימה דיגיטלית על קבלת המשלוח</li>
            <li>מעקב ועדכון איסוף תשלום מהלקוח</li>
            <li>מעקב חזרות וחריגים</li>
            <li>צילום מיקום המשלוח במידה ואושר נקודת הנחה</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row container pt-20">
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="flex flex-col gap-4 pt-32 mx-auto lg:mr-auto max-w-fit">
            <p className="text-4xl text-sky-800 font-bold">
              הפקת דוחות מסודרים בכל זמן
            </p>
            <p className="text-4xl">ליעול והתמצאות מלאה</p>
            <ul dir="rtl" className="text-xl leading-9 list-disc px-8">
              <li>דוחות חודשיים ממוינים לפי קטגוריות</li>
              <li>דוחות איסוף תשלומים וקיזוז מעלויות המשלוחים</li>
              <li>אנליזה של שביעות רצון</li>
              <li>דוחות זמני אספקה ואיכות השירות</li>
              <li>ניתוח תובנות שילוח בהתאם לדוחות</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 relative items-start mt-10 hidden 2xl:flex">
          <Image
            className="object-contain z-[4] mt-0"
            loading="lazy"
            width={124}
            height={99}
            alt=""
            src="/arrow-5.png"
          />
          <Image
            className="object-contain z-[3]"
            width={600}
            height={400}
            alt=""
            src="/light-desktop.png"
          />
        </div>
        <div className="flex-1 relative items-start mt-10 hidden lg:flex 2xl:hidden">
          <Image
            className="object-contain z-[4] mt-0"
            loading="lazy"
            width={104}
            height={80}
            alt=""
            src="/arrow-5.png"
          />
          <Image
            className="object-contain z-[3]"
            width={400}
            height={350}
            alt=""
            src="/light-desktop.png"
          />
        </div>
        <div className="flex-1 items-end lg:flex-row relative justify-center lg:justify-start mt-10 flex lg:hidden p-4 max-w-full">
          <Image
            className="object-contain z-[4] mt-0 rotate-90"
            loading="lazy"
            width={100}
            height={80}
            alt=""
            src="/arrow-5.png"
          />
          <Image
            className="object-contain z-[3]"
            width={200}
            height={200}
            alt=""
            src="/light-desktop.png"
          />
        </div>
      </div>
      <div className=" flex flex-col text-center gap-10 mt-40">
        <b className="text-4xl">
          אנו יודעים להתחבר לכל הפלטפורמות הדיגיטליות המובילות בקלות וביעילות
        </b>
        <div className="w-full flex container mx-auto items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-12 xl:gap-16 px-10">
            <Image
              height={93}
              width={164}
              alt=""
              src="/woocommerce.png"
              className="h-[93px] w-[164px] relative"
            />
            <Image
              height={93}
              width={164}
              alt=""
              src="/shopify.jpeg"
              className="h-[93px] w-[164px] relative"
            />
            <Image
              height={93}
              width={164}
              alt=""
              src="/wix.png"
              className="h-[93px] w-[164px] relative"
            />
            <Image
              height={93}
              width={164}
              alt=""
              src="/wordpress.png"
              className="h-[93px] w-[164px] relative"
            />
            <Image
              height={93}
              width={164}
              alt=""
              src="/magento.png"
              className="h-[93px] w-[164px] relative"
            />
            <Image
              height={93}
              width={164}
              alt=""
              src="/make.png"
              className="h-[93px] w-[164px] relative"
            />
          </div>
        </div>
        <section
          dir="rtl"
          className="text-2xl font-heebo text-black text-center container mx-auto p-4"
        >
          בנוסף, במידת הצורך, אנו מציעים התממשקות API מתקדמת, המאפשרת חיבור ישיר
          ומדויק למערכות שלכם, לשיפור תהליכי העבודה והאוטומציה. כך תיהנו משירות
          מותאם אישית, חכם ומהיר עוד יותר.
        </section>
      </div>
    </div>
  );
};

export default ScreenShots;
