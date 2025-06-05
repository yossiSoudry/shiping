"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ThanksPage() {
  return (
    <div className="mt-20 py-20 bg-gradient-to-br from-blue-900/20 via-blue-700/90 to-blue-500/50 text-white flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 text-8xl text-orange-300/50">★</div>
        <div className="absolute bottom-32 left-32 text-6xl text-orange-300/60">★</div>
        <div className="absolute top-1/3 left-10 text-7xl text-orange-300/40">★</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            type: "spring", 
            stiffness: 200,
            damping: 15 
          }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-green-500 rounded-full flex items-center justify-center shadow-2xl relative">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-full bg-green-400 blur-xl"
            />
            <CheckCircle2 className="w-16 h-16 text-white relative z-10" />
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
            תודה רבה!
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl mx-auto"
          >
            הפרטים שלכם נקלטו בהצלחה במערכת שלנו
          </motion.p>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-bold text-orange-300 mb-2">מה הלאה?</h3>
            <p className="text-blue-200 text-sm">
              אחד מנציגי המכירות שלנו יצור איתכם קשר בקרוב לתיאום פגישת היכרות ובניית הצעת מחיר מותאמת אישית
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-bold text-orange-300 mb-2">זמן תגובה</h3>
            <p className="text-blue-200 text-sm">
              הנציגים שלנו אנחנו מחויבים לחזור אליכם בהקדם עם השירות הטוב ביותר. לפניות דחופות, אתם מוזמנים להתקשר אלינו ישירות
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-300/90 to-orange-500/90 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              חזרה לעמוד הבית
            </motion.button>
          </Link>

          <motion.div className="flex gap-4">
            <a 
              href="tel:052-760-0768"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              052-760-0768
            </a>
            
            <a 
              href="https://wa.me/972527600768?text=היי,%20הגעתי%20דרך%20האתר%20שלכם.%0Aאשמח%20אם%20תוכלו%20לעזור%20לי%20בבקשה%20עם%20העניין%20הבא:"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              וואטסאפ
            </a>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-blue-300/80 text-sm">
            מאז 2016 אנחנו מספקים שירותי משלוחים מקצועיים ואמינים לכל רחבי הארץ
          </p>
          <motion.p 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-orange-300 mt-2 font-semibold"
          >
            המרחקים קטנים כשאנחנו בדרך...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}