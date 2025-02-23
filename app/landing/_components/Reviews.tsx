import Image from "next/image";
import ProfessionalService from "./professional-service";
import HeroTestimonials from "@/app/(site)/HeroTestimonials";

const Reviews = () => {
  return (
    <div>
      <section className="w-full flex flex-col items-center bg-[url('/bg-3.svg')] bg-cover bg-no-repeat max-md:py-20 p-4 md:p-10 md:mt-20">
        <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* עמוד ימני - טקסטים */}
          <div className="flex flex-col items-start space-y-10 mt-20">
            {/* כותרות */}
            <div>
              <h3 className="text-4xl font-bold">
                לקוחות ממליצים -<br />
                שיתוף מחוויות אמיתיות!
              </h3>
            </div>

            {/* פרטי ביקורות */}
            <div>
              <p className="text-2xl text-gray-700 text-right">
                הלקוחות שלנו מספרים על שירות מקצועי ומדויק שעושה את העבודה פשוטה
                ויעילה יותר:
              </p>
            </div>

            {/* ביקורות נוספות */}
          </div>

          {/* עמוד שמאלי - תמונה וכיתוב */}
          <div className="hidden md:flex flex-col items-end relative -mt-24">
            <Image
              className="rotate-[-2deg]"
              width={600}
              height={260}
              alt="חברת המשלוחים עם הדרוג הכי גבוה"
              src="/stamp.png"
            />
            <b className="-mt-10 transform rotate-[-6deg] text-2xl text-gray-800">
              חברת המשלוחים עם הדירוג הכי גבוה בגוגל!
            </b>
          </div>

        </div>
          <div className="min-w-full -mb-80 overflow-hidden flex justify-evenly">
            <Image
              className="w-[249.4px] h-[254.1px]  object-contain z-[1] hidden md:block"
              loading="lazy"
              width={249}
              height={254}
              alt=""
              src="/medal.png"
            />
              <HeroTestimonials />
            <Image
              className="w-[249.4px] h-[254.1px]  object-contain z-[1] hidden md:block"
              loading="lazy"
              width={249}
              height={254}
              alt=""
              src="/medal.png"
            />
            {/* <div className="w-80"></div> */}

          </div>
      </section>
      <ProfessionalService />
    </div>
  );
};

export default Reviews;
