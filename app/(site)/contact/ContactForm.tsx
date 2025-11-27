"use client";

import React, {
  useState,
  ChangeEvent,
  FormEvent,
  FC,
  useRef,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaPhone,
  FaEnvelope,
  FaUser,
  FaCheckCircle,
  FaTruck,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
};

const benefits = [
  {
    icon: FaTruck,
    title: "משלוחים מהירים",
    description: "משלוחים באותו יום לכל רחבי הארץ",
  },
  {
    icon: FaClock,
    title: "זמינות 24/6",
    description: "שירות זמין מסביב לשעון כל ימות השנה",
  },
  {
    icon: FaShieldAlt,
    title: "אמינות מוכחת",
    description: "99.8% מהמשלוחים מגיעים בזמן ובשלמות",
  },
];

const trustBadges = [
  { icon: FaCheckCircle, text: "ללא עלויות נסתרות" },
  { icon: FaShieldAlt, text: "ביטוח מלא" },
  { icon: FaClock, text: "תגובה תוך 24 שעות" },
];

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
  });
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const router = useRouter();
  const recaptchaRef = useRef<any>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    // אם עדיין אין טוקן – קודם מציגים קפצ’ה ורק אחר כך שולחים
    if (!captchaToken) {
      if (!showCaptcha) {
        setShowCaptcha(true);
        setMessage("לאימות אבטחה, אנא אשר שאינך רובוט");
      } else {
        setMessage("נא לאשר שאינך רובוט");
      }
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      if (response.ok) {
        setTimeout(() => {
          router.push("/thanks");
        }, 1500);
      } else {
        const data = await response.json().catch(() => null);
        setMessage(
          data?.message || "אירעה שגיאה בשליחת הטופס. נסה שוב מאוחר יותר."
        );
        setLoading(false);
      }
    } catch (error) {
      setMessage("אירעה תקלה. אנא נסה שוב.");
      setLoading(false);
    }
  };

  return (
    <>
      {/* Overlay טעינה */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900/95 to-blue-700/95 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="text-center text-white">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 mx-auto mb-6 border-4 border-orange-300/30 border-t-orange-400 rounded-full"
              />

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-6"
              >
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaTruck className="w-16 h-16 text-orange-400 mx-auto" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-2 text-orange-300">
                  שולח את הפרטים...
                </h3>
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-blue-200"
                >
                  רק עוד רגע ואנחנו איתכם בדרך
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5 }}
                className="mt-8 h-1 bg-orange-400 rounded-full max-w-xs mx-auto"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-20 bg-gradient-to-b from-gray-50 to-white">
        {/* Hero + Benefits כמו שהיה אצלך... */}

        {/* Contact Form Section */}
        <div className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              style={{ opacity: loading ? 0.3 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r from-orange-300/90 to-orange-500/90 p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-2">מלאו את הטופס עכשיו</h2>
                <p className="text-orange-100">
                  ותקבלו הצעת מחיר מותאמת אישית תוך 24 שעות
                </p>
              </div>

              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="שם מלא"
                      className="w-full pl-12 p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400/90 transition-colors text-right"
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="מספר טלפון"
                      className="w-full pl-12 p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400/90 transition-colors text-right"
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="כתובת אימייל"
                      className="w-full pl-12 p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400/90 transition-colors text-right"
                      required
                      disabled={loading}
                    />
                  </div>

                  {/* הקפצ’ה – תופיע רק אחרי ניסיון שליחה */}
                  {showCaptcha && RECAPTCHA_SITE_KEY && (
                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={handleCaptchaChange}
                      />
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                    className="w-full bg-gradient-to-br from-blue-900/90 to-blue-700/90 text-white py-4 px-6 rounded-lg hover:from-blue-800/90 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-normal text-xl relative overflow-hidden"
                  >
                    {loading ? (
                      <motion.div
                        className="flex items-center justify-center gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        שולח...
                      </motion.div>
                    ) : (
                      "שלח עכשיו"
                    )}
                  </motion.button>
                </form>

                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-6 p-4 rounded-lg text-center ${
                      message.includes("תודה")
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    <FaCheckCircle className="inline-block ml-2" />
                    {message}
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* trustBadges וכו' – כמו שהיה */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
