"use client";

import { motion } from "framer-motion";
import { Package, Truck, Route, CheckCircle2, ArrowLeft } from "lucide-react";

const processSteps = [
  {
    title: "הזמנה",
    description: "הזינו משלוח במערכת או באפליקציה",
    icon: Package,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600"
  },
  {
    title: "איסוף",
    description: "נהג מגיע לאסוף את החבילה",
    icon: Truck,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-100",
    textColor: "text-orange-600"
  },
  {
    title: "משלוח",
    description: "הובלה מהירה ובטוחה ליעד",
    icon: Route,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600"
  },
  {
    title: "מסירה",
    description: "קבלת אישור מסירה דיגיטלי",
    icon: CheckCircle2,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-100",
    textColor: "text-green-600"
  }
];

export default function TimelineProcessV3() {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4"
        >
          איך זה עובד?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-blue-200 mb-16 text-lg"
        >
          תהליך פשוט ויעיל ב-4 צעדים בלבד
        </motion.p>
        
        <div className="relative">
          {/* Connection Line - positioned between titles */}
          <div className="hidden md:block absolute left-[12.5%] right-[12.5%] h-1 bg-blue-700/30"
               style={{
                 top: 'calc(50% + 26px)', // Moved down just 20px
                 transform: 'translateY(-50%)'
               }}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-l from-green-400 via-orange-400 to-blue-400 origin-right h-full"
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                className="relative"
              >
                <div className="text-center">
                  {/* Icon Container with Floating Animation */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.3,
                      ease: "easeInOut" 
                    }}
                    className="relative mb-6 mx-auto w-24 h-24 flex items-center justify-center"
                  >
                    {/* Glowing Effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className={`absolute inset-0 rounded-full ${step.bgColor} blur-xl`}
                    />
                    
                    {/* Main Circle */}
                    <div className={`relative w-full h-full bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20`}>
                      <step.icon className="w-12 h-12 text-white" />
                    </div>
                    
                    {/* Step Number - Fixed without rotation */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className={`text-sm font-bold ${step.textColor}`}>{index + 1}</span>
                    </div>
                  </motion.div>

                  {/* Content with Typewriter Effect */}
                  <motion.div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-blue-200 text-sm">{step.description}</p>
                  </motion.div>

                  {/* Arrow positioned between titles */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                      className="hidden md:block absolute -left-14"
                      style={{ 
                        top: 'calc(50% + 26px)', // Moved down just 20px
                        transform: 'translateY(-50%)' 
                      }}
                    >
                      <motion.div
                        animate={{
                          x: [-5, 5, -5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative flex items-center justify-center"
                      >
                        <ArrowLeft className="w-10 h-10 text-orange-400" />
                        {/* Glow effect */}
                        <motion.div
                          animate={{
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 blur-sm flex items-center justify-center"
                        >
                          <ArrowLeft className="w-10 h-10 text-orange-300" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.p 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xl text-orange-300 mb-6"
          >
            תהליך פשוט, מהיר ויעיל
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-400/90 to-orange-500/90 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
          >
            התחל עכשיו
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}