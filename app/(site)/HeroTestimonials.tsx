"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setReviewCount((prev) => {
          if (prev < 1200) {
            return prev + Math.ceil((1200 - prev) / 10);
          }
          clearInterval(interval);
          return 1200;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div
      dir="rtl"
      ref={sectionRef}
      className="py-4 bg-white relative overflow-hidden"
    >
      {/* Background Stars */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 right-10 text-6xl">★</div>
        <div className="absolute top-1/4 left-1/4 text-8xl">★</div>
        <div className="absolute bottom-1/3 right-1/3 text-7xl">★</div>
        <div className="absolute bottom-20 left-20 text-5xl">★</div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center bg-white rounded-full py-3 px-6 shadow-lg border border-gray-100 mb-8 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent"
              style={{
                transform: "translateX(-100%)",
                animation: "shine 3s infinite",
              }}
            ></div>
            <div className="relative h-8 w-8 ml-4">
              <Image
                src="/assets/google-logo.png"
                alt="Google"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
                  >
                    <StarIcon className="h-5 w-5 text-amber-400 fill-amber-400" />
                  </motion.div>
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-800 mt-1">
                דירוג 5 מתוך 5 | {reviewCount}+ ביקורות
              </p>
            </div>
          </motion.div>

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              מה הלקוחות שלנו אומרים?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              אלפי לקוחות מרוצים נהנים משירותי המשלוחים שלנו
            </p>
          </motion.div>
        </div>

        {/* Animated Stars */}
        <div className="flex justify-center mb-12">
          <div className="relative h-16 w-full flex justify-center">
            {[...Array(5)].map((_, i) => {
              // מרכוז הכוכבים - חישוב מיקום יחסי למרכז
              const position = i - 2; // -2, -1, 0, 1, 2
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isVisible
                      ? {
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.5 + i * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  style={{
                    position: "absolute",
                    left: `calc(50% + ${position * 40}px)`,
                    top: 0,
                    animation: isVisible
                      ? `pulse-star 2s infinite ${i * 0.2}s`
                      : "",
                  }}
                >
                  <StarIcon className="w-10 h-10 text-amber-400 fill-amber-400 filter drop-shadow-lg" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Testimonial Card - עכשיו במרכז ללא כרטיסיה שניה */}
        <div className="max-w-2xl mx-auto">
          <TestimonialCarousel isVisible={isVisible} />
        </div>
      </div>

      {/* CSS Keyframes for Animations */}
      <style jsx>{`
        @keyframes pulse-star {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          20%,
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

// Testimonial Carousel Component
const TestimonialCarousel = ({ isVisible }: { isVisible: boolean }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      content:
        "הנהג תיקשר איתי כשעה לפני ההגעה כמו שביקשתי, תיקשר שוב שתי דקות לפני שהגיע. השמלות נראות איכותיות גם הבד וגם התפירה.",
      name: "חני זיאת",
      image: "/assets/clients/client1.png",
    },
    {
      id: 2,
      content:
        "הגיע אלי ביום של עומסים מטורפים בכבישים, אבל עדיין הגיע, אפילו שזה היה הרבה מעבר לשעות העבודה שלו. היה נעים ונחמד, למרות שבטח היה עייף.",
      name: "Ayelet Barkay",
      image: "/assets/clients/client2.png",
    },
    {
      id: 3,
      content:
        "שליח מצויין, סובלני, ירא שמים. טוב לבריאות. חברת שליחות כולה חסד. תודה לכם.",
      name: "Avner Mois",
      image: "/assets/clients/client3.png",
    },
    {
      id: 4,
      content:
        "הנהג שמגיע אלי בקביעות עם חיוך על הפנים, כיף לקבל ממנו משלוחים.",
      name: "נחום דוד",
      image: "/assets/clients/client4.png",
    },
    {
      id: 5,
      content:
        "חברת שליחויות טובה, זריזה ויעילה! בניגוד לחברות אחרות גדולות שזורקים חבילות בחדר מדרגות. אלופים אתם!!",
      name: "Binyomin",
      image: "/assets/clients/client5.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="bg-white rounded-xl p-6 shadow-xl border border-gray-100"
    >
      <div className="absolute top-4 left-4">
        <StarIcon className="h-8 w-8 text-orange-500 opacity-20" />
      </div>

      <h3 className="text-xl font-bold text-blue-900 mb-4">ביקורות נבחרות</h3>

      <div className="relative h-[200px] overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute inset-0 transition-all duration-500 ${
              index === activeIndex
                ? "opacity-100 translate-x-0"
                : index < activeIndex
                ? "opacity-0 translate-x-full"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="h-full flex flex-col justify-between">
              <blockquote className="text-gray-700 mb-4 text-sm">
                {" "}
                &quot;{testimonial.content}&quot;
              </blockquote>
              <div className="flex items-center">
                <div className="relative h-10 w-10 rounded-full overflow-hidden ml-3 border-2 border-amber-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="h-4 w-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`mx-1 h-2 rounded-full transition-all ${
              activeIndex === index ? "w-6 bg-orange-500" : "w-2 bg-gray-300"
            }`}
            aria-label={`עבור לביקורת ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;
