import Image from "next/image";

const Content = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row font-heebo mt-20">
      <div className="z-10">
        <div className="relative w-full md:w-[600px] aspect-[3/2]">
          {" "}
          {/* שימוש ב-aspect ratio קבוע */}
          <Image
            className="absolute top-0 right-0 w-full h-full object-cover rounded-l-[52px]"
            loading="lazy"
            width={759}
            height={499}
            alt=""
            src="/storage.png"
          />
          <div className="absolute w-full h-full">
            {" "}
            {/* מיכל יחסי לתמונה הראשית */}
            <div
              className="absolute top-[70%] md:top-[50%] right-[-20%] md:right-0 
                    w-[40%] md:w-[286px] aspect-square"
            >
              {" "}
              {/* שימוש באחוזים במובייל */}
              <div
                className="absolute right-[100%] rounded-[52px] bg-orange-100 
                      border-white border-[15px] w-full h-full 
                      flex items-center justify-center"
              >
                <Image
                  className="w-[60%] h-[60%] object-contain z-[2] animate-spinner-ease-spin"
                  width={152}
                  height={146}
                  alt=""
                  src="/circle-arrows.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-16 pt-32 lg">
        <div className="mb-4 text-3xl font-light leading-relaxed pr-16">
          <p className="m-0">
            עם נסיון ארוך ומרכזים לוגיסטיים הפועלים מסביב לשעון
          </p>
          <p className="m-0">אנחנו מנגישים לכם שירותי לוגיסטיקה</p>
          <p className="m-0">שהפכו להצלחה עבור לקוחות אסטרטגיים</p>
        </div>
        <div className="max-lg:bg-sky-800 text-white lg:text-sky-800 lg:mr-16 lg:pr-16 pb-6 pt-6 leading-relaxed">
          <h2 className="text-4xl lg:text-5xl font-bold m-0 leading-relaxed max-lg:text-center">
            E2E לוגיסטיקה
          </h2>
          <h1 className="text-3xl lg:text-5xl font-extralight m-0 mt-1 leading-relaxed max-lg:text-center">
            End-to-End Logistics
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Content;
