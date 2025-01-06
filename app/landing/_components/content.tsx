import Image from "next/image";

const Content = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row font-heebo mt-20">
      <div className="z-10">
        <div className="w-full md:w-[600px] h-[600px] relative">
          <Image
            className="absolute top-0 rounded-l-[52px]"
            loading="lazy"
            width={759}
            height={499}
            alt=""
            src="/warehouse@2x.png"
          />
          <div className="absolute top-[40%] right-0 w-[286px] h-[286px]">
            <div className="absolute right-[420px] rounded-[52px] bg-orange-100 border-white border-[15px] w-[286px] h-[286px] flex items-center justify-center">
              <Image
                className="w-[152px] h-[146px] object-contain z-[2]"
                width={152}
                height={146}
                alt=""
                src="/circle-arrows.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-16 pt-16 pr-16">
        <div className="mb-4 text-3xl font-light leading-relaxed">
          <p className="m-0">
            עם נסיון ארוך ומרכזים לוגיסטיים הפועלים מסביב לשעון
          </p>
          <p className="m-0">אנחנו מנגישים לכם שירותי לוגיסטיקה</p>
          <p className="m-0">שהפכו להצלחה עבור לקוחות אסטרטגיים</p>
        </div>
        <div className="text-sky-800 pr-16 leading-relaxed">
          <h2 className="text-5xl font-bold m-0 leading-relaxed">E2E לוגיסטיקה</h2>
          <h1 className="text-5xl font-extralight m-0 mt-1 leading-relaxed">
            End-to-End Logistics
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Content;
