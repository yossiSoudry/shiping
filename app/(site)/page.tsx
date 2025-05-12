import Link from "next/link";
import { CardHoverEffect } from "./HeroCardHoverEffect";
import { HeroImages } from "./HeroImages";
import HeroStatistics from "./HeroStatistics";
import HeroTestimonials from "./HeroTestimonials";
import ModernTimelineProcess from "./ModernTimelineProcess";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="h-screen w-full dark:bg-black bg-blue-800/5 dark:bg-grid-white/[0.2] bg-grid-orange-400/[0.2] relative overflow-hidden">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="flex flex-col gap-10 h-fit relative z-10">
          <div className="text-center pt-16">
            <p className="text-5xl md:text-7xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-blue-400 py-8">
              המרחקים קטנים
            </p>
            <p className="text-5xl md:text-7xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-orange-500">
              כשאנחנו בדרך...
            </p>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto px-4">
              שירותי משלוחים מקצועיים ואמינים לכל רחבי הארץ. מאז 2016 אנחנו
              מספקים פתרונות לוגיסטיים מתקדמים לעסקים ופרטיים
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/contact">
                <button className="bg-orange-400/90 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
                  התחל עכשיו
                </button>
              </Link>
              <Link href="/about">
                <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-3 px-8 rounded-full transition-colors">
                  על החברה
                </button>
              </Link>
            </div>
          </div>
          <HeroImages />
        </div>
      </div>

      {/* Stats Section */}
      <HeroStatistics />

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">
          למה לבחור בשיפינג?
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto px-4">
          אנחנו לא סתם חברת משלוחים. אנחנו השותף העסקי שלכם, המחויב להצלחה שלכם
          ושל הלקוחות שלכם
        </p>
        <CardHoverEffect />
      </div>

      {/* Services Overview */}
      {/* <ServicesSection /> */}

      {/* Process Section */}
      <ModernTimelineProcess />

      {/* Testimonials */}
      <div className="py-20 bg-white">
        <h2 className="text-4xl text-center text-orange-500 mb-12">
          מה הלקוחות שלנו אומרים?
        </h2>
        <HeroTestimonials />
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r px-4 from-orange-400 to-orange-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">מוכנים להתחיל?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          הצטרפו לאלפי לקוחות מרוצים שכבר נהנים משירות המשלוחים הטוב ביותר
          בישראל
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <button className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-colors">
              קבל הצעת מחיר
            </button>
          </Link>
          <Link href="/services">
            <button className="bg-blue-900 text-white hover:bg-blue-800 font-bold py-4 px-8 rounded-full transition-colors">
              הכירו את השירותים שלנו
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
