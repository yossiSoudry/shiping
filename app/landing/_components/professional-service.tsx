import Image from "next/image";

const ProfessionalService = () => {
  return (
    <div className="container mx-auto my-20 flex flex-col items-start px-10 py-10 text-gray font-heebo">
      {/* כותרת */}
      <h3 className="text-4xl font-bold mb-10 text-right">
        האקסטרה שלנו - כי אנחנו מאמינים שהאחריות עלינו
      </h3>

      {/* רשימה */}
      <ul className="list-none flex flex-col gap-6 text-2xl text-black">
        <li className="flex items-start gap-6">
          <div className="relative flex-shrink-0 w-16 h-16">
            <Image
              src="/bg-vector.svg"
              alt="icon"
              layout="fill"
              objectFit="contain"
              className="absolute"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sky-800 font-bold text-5xl">
              +
            </span>
          </div>
          <span className="text-4xl">
            ללא הגבלת נסיונות מסירה
            </span>
        </li>
        <li className="flex items-start gap-6">
          <div className="relative flex-shrink-0 w-16 h-16">
            <Image
              src="/bg-vector.svg"
              alt="icon"
              layout="fill"
              objectFit="contain"
              className="absolute"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sky-800 font-bold text-5xl">
              +
            </span>
          </div>
          <span className="text-4xl">שינוי כתובת ללא עלות</span>
        </li>
        <li className="flex items-start gap-6">
          <div className="relative flex-shrink-0 w-16 h-16">
            <Image
              src="/bg-vector.svg"
              alt="icon"
              layout="fill"
              objectFit="contain"
              className="absolute"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sky-800 font-bold text-5xl">
              +
            </span>
          </div>
          <span className="text-4xl">יצירת קשר בכל הדרכים - טלפון, מסרונים, וואטסאפ ואימייל</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfessionalService;
