"use client";

import { useState, ChangeEvent, FormEvent, FC } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaTruck } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export type LidFormProps = {
  title?: boolean;
};

type FormData = {
  name: string;
  phone: string;
  email: string;
};

const LidForm: FC<LidFormProps> = ({ title }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const router = useRouter();

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

    if (!captchaToken) {
      setMessage("נא לאשר שאינך רובוט");
      return;
    }

    setIsSubmitting(true);

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
        setIsSubmitting(false);
      }
    } catch (error) {
      setMessage("אירעה תקלה. אנא נסה שוב.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Overlay טעינה */}
      <AnimatePresence>
        {isSubmitting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900/95 to-blue-700/95 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="text-center text-white">
              {/* עיגול מסתובב */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 mx-auto mb-6 border-4 border-orange-300/30 border-t-orange-400 rounded-full"
              />

              {/* אייקון משאית */}
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

              {/* טקסט */}
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

              {/* Progress bar */}
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

      {/* קופסת הטופס */}
      <div
        className="max-w-4xl w-full bg-white shadow-xl border border-orange-200 rounded-lg p-8 mx-4 min-h-32 flex flex-col justify-center border-t-orange-300 border-b-orange-100"
        style={{
          opacity: isSubmitting ? 0.3 : 1,
          transition: "opacity 0.3s",
        }}
      >
        {title && (
          <h2 className="text-2xl w-full text-start text-sky-800 mb-6">
            השאירו פרטים ותתחילו להתייעל
          </h2>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-800"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="שם"
            className="w-full md:w-1/4 p-1 md:p-3 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-steelblue-500"
            required
            disabled={isSubmitting}
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="טלפון"
            className="w-full md:w-1/4 p-1 md:p-3 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-steelblue-500"
            required
            disabled={isSubmitting}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="אימייל"
            className="w-full md:w-1/4 p-1 md:p-3 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-steelblue-500"
            required
            disabled={isSubmitting}
          />

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            className="w-full md:w-1/4 p-1 md:p-3 px-3 bg-sky-800 text-white font-bold rounded hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-800 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
          >
            {isSubmitting ? (
              <motion.div
                className="flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                שולח...
              </motion.div>
            ) : (
              "תבדקו אותנו"
            )}
          </motion.button>
        </form>

        {/* reCAPTCHA */}
        <div className="mt-4 flex justify-center">
          {RECAPTCHA_SITE_KEY && (
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
            />
          )}
        </div>

        {message && (
          <p className="mt-4 text-center text-red-600">{message}</p>
        )}
      </div>
    </>
  );
};

export default LidForm;
