"use client";

import React, {
  useState,
  ChangeEvent,
  FormEvent,
  FC,
  useRef,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaPhone,
  FaEnvelope,
  FaUser,
  FaCheckCircle,
  FaTruck,
  FaClock,
  FaShieldAlt,
  FaBuilding,
  FaMapMarkerAlt,
  FaRegCommentDots,
} from "react-icons/fa";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

type ContactFormData = {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  city: string;
  notes: string;
};

const initialData: ContactFormData = {
  name: "",
  businessName: "",
  phone: "",
  email: "",
  city: "",
  notes: "",
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
  const [formData, setFormData] = useState<ContactFormData>(initialData);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const recaptchaRef = useRef<any>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const resetCaptcha = () => {
    recaptchaRef.current?.reset();
    setCaptchaToken(null);
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
        body: JSON.stringify({
          ...formData,
          source:
            typeof window !== "undefined" ? window.location.hostname : "",
          captchaToken,
        }),
      });

      if (response.ok) {
        // success או duplicate – בשני המקרים מציגים תודה
        setSuccess(true);
        setLoading(false);
        return;
      }

      // שגיאות – שומרים על הערכים שהוקלדו ומאפשרים ניסיון חוזר
      const data = await response.json().catch(() => null);
      if (response.status === 429) {
        setMessage("ניסיתם להירשם פעמים רבות מדי, נסו שוב מאוחר יותר");
      } else {
        setMessage(
          data?.error || "אירעה שגיאה בשליחת הטופס. נסה שוב מאוחר יותר."
        );
      }
      resetCaptcha();
      setLoading(false);
    } catch (error) {
      setMessage("אירעה תקלה. אנא נסה שוב.");
      resetCaptcha();
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border-2 border-slate-200 bg-slate-50/50 py-3.5 pr-12 pl-4 text-right transition-all placeholder:text-slate-400 focus:border-brand-orange focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-orange/10 disabled:opacity-50";
  const labelClass =
    "mb-1.5 block text-sm font-medium text-slate-700";

  return (
    <>
      {/* Overlay טעינה */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-brand-blue-900/95 to-brand-blue-700/95 backdrop-blur-sm"
          >
            <div className="text-center text-white">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="mx-auto mb-6 h-20 w-20 rounded-full border-4 border-brand-orange/30 border-t-brand-orange"
              />
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-6"
              >
                <FaTruck className="mx-auto h-16 w-16 text-brand-orange-400" />
              </motion.div>
              <h3 className="mb-2 text-2xl font-bold text-brand-orange-300">
                שולח את הפרטים...
              </h3>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-brand-blue-100"
              >
                רק עוד רגע ואנחנו איתכם בדרך
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-sm font-semibold text-brand-orange-600">
              צרו קשר
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-brand-blue-800 md:text-5xl">
              קבלו הצעת מחיר אישית
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              השאירו פרטים ונחזור אליכם עם פתרון משלוחים מותאם בדיוק לעסק שלכם —
              תוך 24 שעות.
            </p>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-5">
            {/* Info panel */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue-800 to-brand-blue-900 p-8 text-white lg:col-span-2 lg:p-10">
              <div className="absolute -top-20 -left-16 h-56 w-56 rounded-full bg-brand-orange/20 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold">למה שיפינג?</h2>
                <p className="mt-2 text-brand-blue-100/80">
                  אלפי עסקים כבר בוחרים בנו. הצטרפו אליהם.
                </p>

                <div className="mt-8 space-y-6">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange-400">
                        <benefit.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold">{benefit.title}</h3>
                        <p className="text-sm text-brand-blue-100/70">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6">
                  {trustBadges.map((badge, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-brand-blue-100/90"
                    >
                      <badge.icon className="h-4 w-4 text-brand-orange-400" />
                      {badge.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form / Success card */}
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50 lg:col-span-3 lg:p-10">
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex h-full flex-col items-center justify-center py-10 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100"
                    >
                      <FaCheckCircle className="h-11 w-11 text-green-500" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-brand-blue-800">
                      תודה רבה!
                    </h2>
                    <p className="mt-3 max-w-sm text-lg text-slate-600">
                      קיבלנו את הפרטים וניצור איתכם קשר בקרוב. בינתיים אנחנו כבר
                      בדרך 🚚
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="mb-1 text-2xl font-bold text-brand-blue-800">
                      מלאו את הטופס
                    </h2>
                    <p className="mb-8 text-slate-500">
                      נחזור אליכם עם הצעה מותאמת אישית.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid gap-5 sm:grid-cols-2">
                        {/* שם מלא */}
                        <div>
                          <label htmlFor="name" className={labelClass}>
                            שם מלא <span className="text-brand-orange">*</span>
                          </label>
                          <div className="relative">
                            <FaUser className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              id="name"
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="ישראל ישראלי"
                              className={inputClass}
                              required
                              aria-required="true"
                              disabled={loading}
                            />
                          </div>
                        </div>

                        {/* שם עסק */}
                        <div>
                          <label htmlFor="businessName" className={labelClass}>
                            שם עסק
                          </label>
                          <div className="relative">
                            <FaBuilding className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              id="businessName"
                              type="text"
                              name="businessName"
                              value={formData.businessName}
                              onChange={handleChange}
                              placeholder="שם החברה"
                              className={inputClass}
                              disabled={loading}
                            />
                          </div>
                        </div>

                        {/* טלפון */}
                        <div>
                          <label htmlFor="phone" className={labelClass}>
                            טלפון <span className="text-brand-orange">*</span>
                          </label>
                          <div className="relative">
                            <FaPhone className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              id="phone"
                              type="tel"
                              inputMode="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="050-0000000"
                              className={inputClass}
                              required
                              aria-required="true"
                              disabled={loading}
                            />
                          </div>
                        </div>

                        {/* אימייל */}
                        <div>
                          <label htmlFor="email" className={labelClass}>
                            אימייל
                          </label>
                          <div className="relative">
                            <FaEnvelope className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              id="email"
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="name@example.com"
                              className={inputClass}
                              disabled={loading}
                            />
                          </div>
                        </div>
                      </div>

                      {/* עיר */}
                      <div>
                        <label htmlFor="city" className={labelClass}>
                          עיר
                        </label>
                        <div className="relative">
                          <FaMapMarkerAlt className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            id="city"
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="העיר שלכם"
                            className={inputClass}
                            disabled={loading}
                          />
                        </div>
                      </div>

                      {/* הערות */}
                      <div>
                        <label htmlFor="notes" className={labelClass}>
                          הערות / פרטים נוספים
                        </label>
                        <div className="relative">
                          <FaRegCommentDots className="pointer-events-none absolute right-4 top-4 text-slate-400" />
                          <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="ספרו לנו על צרכי המשלוחים שלכם..."
                            rows={4}
                            className={`${inputClass} resize-none`}
                            disabled={loading}
                          />
                        </div>
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
                        className="flex w-full items-center justify-center gap-3 rounded-xl bg-brand-orange py-4 px-6 text-xl font-bold text-white shadow-lg shadow-brand-orange/30 transition-all hover:bg-brand-orange-500 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                            />
                            שולח...
                          </>
                        ) : (
                          "שלח עכשיו"
                        )}
                      </motion.button>

                      <p className="text-center text-xs text-slate-400">
                        הפרטים שלכם מאובטחים ולא יועברו לצד שלישי.
                      </p>
                    </form>

                    {message && (
                      <motion.div
                        role="alert"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 rounded-xl bg-amber-50 p-4 text-center text-sm text-amber-700"
                      >
                        {message}
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
