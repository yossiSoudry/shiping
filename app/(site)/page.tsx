import Link from "next/link";
import { CardHoverEffect } from "./HeroCardHoverEffect";
import { HeroImages } from "./HeroImages";
import HeroStatistics from "./HeroStatistics";
import TestimonialsSection from "./HeroTestimonials";
import ModernTimelineProcess from "./ModernTimelineProcess";
import { RoadBackground } from "@/components/ui/RoadBackground";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="h-screen w-full illustrated-road-background relative overflow-hidden">
        {/* רקע הכביש המאויר */}
        <RoadBackground />

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
      <div className="py-10 bg-white">
        <TestimonialsSection />
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