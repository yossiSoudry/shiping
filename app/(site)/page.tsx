import Link from "next/link";
import { ArrowLeft, Star, ShieldCheck, Truck, Sparkles } from "lucide-react";
import { CardHoverEffect } from "./HeroCardHoverEffect";
import { HeroImages } from "./HeroImages";
import HeroStatistics from "./HeroStatistics";
import TestimonialsSection from "./HeroTestimonials";
import ModernTimelineProcess from "./ModernTimelineProcess";
import { RoadBackground } from "@/components/ui/RoadBackground";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="illustrated-road-background relative flex min-h-screen w-full flex-col overflow-hidden">
        <RoadBackground />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pt-32 pb-8 text-center sm:pt-36">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-blue shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-brand-orange" />
            פתרונות לוגיסטיקה מתקדמים מאז 2016
          </div>

          {/* Headline */}
          <h1 className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            <span className="bg-gradient-to-b from-brand-blue-700 to-brand-blue-400 bg-clip-text text-transparent">
              המרחקים קטנים
            </span>
            <br />
            <span className="bg-gradient-to-b from-brand-orange-400 to-brand-orange-600 bg-clip-text text-transparent">
              כשאנחנו בדרך
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
            שירותי משלוחים מקצועיים ואמינים לכל רחבי הארץ. אנחנו מספקים פתרונות
            לוגיסטיים חכמים לעסקים ולפרטיים — מהיר, מדויק ובשליטה מלאה.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3.5 font-bold text-white shadow-lg shadow-brand-orange/30 transition-all hover:-translate-y-0.5 hover:bg-brand-orange-500 hover:shadow-xl"
            >
              התחל עכשיו
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue/20 bg-white/60 px-8 py-3.5 font-bold text-brand-blue backdrop-blur transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white"
            >
              על החברה
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand-orange text-brand-orange"
                  />
                ))}
              </span>
              <span className="font-medium text-slate-700">
                4,000+ דירוגי 5 כוכבים בגוגל
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-blue" />
              <span>שירות זמין 24/6</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-brand-blue" />
              <span>פריסה ארצית מלאה</span>
            </div>
          </div>
        </div>

        {/* Vehicles slider — full bleed, edge to edge */}
        <div className="relative z-10 mt-auto w-full">
          <HeroImages />
        </div>
      </section>

      {/* Stats Section */}
      <HeroStatistics />

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="mb-4 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-sm font-semibold text-brand-orange-600">
            למה שיפינג
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-brand-blue-800">
            לא סתם חברת משלוחים
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            אנחנו השותף העסקי שלכם — מחויבים להצלחה שלכם ושל הלקוחות שלכם, בכל
            משלוח ובכל שעה.
          </p>
        </div>
        <div className="mt-14">
          <CardHoverEffect />
        </div>
      </section>

      {/* Process Section */}
      <ModernTimelineProcess />

      {/* Testimonials */}
      <section className="bg-white py-16">
        <TestimonialsSection />
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-brand-blue-800 px-4 py-24 text-center text-white">
        <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-brand-blue-400/30 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            מוכנים להתחיל?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-brand-blue-100">
            הצטרפו לאלפי לקוחות מרוצים שכבר נהנים משירות המשלוחים הטוב בישראל.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-4 font-bold text-white shadow-lg shadow-brand-orange/30 transition-all hover:-translate-y-0.5 hover:bg-brand-orange-500"
            >
              קבל הצעת מחיר
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur transition-all hover:bg-white hover:text-brand-blue-800"
            >
              הכירו את השירותים שלנו
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
