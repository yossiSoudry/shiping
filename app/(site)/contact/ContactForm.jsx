"use client";

import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaUser, FaCheckCircle, FaArrowLeft, FaTruck, FaClock, FaShieldAlt } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://hook.eu2.make.com/6nsscn50dbfjcn754cuuqe4nohkmwosq",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage("תודה! הפרטים נשלחו בהצלחה.");
        setFormData({ name: "", phone: "", email: "" });
      } else {
        setMessage("אירעה שגיאה בשליחת הטופס. נסה שוב מאוחר יותר.");
      }
    } catch (error) {
      setMessage("אירעה תקלה. אנא נסה שוב.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/90 to-blue-700/90 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            צור קשר והצטרף למהפכת המשלוחים
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            מוכנים לחוות שירות משלוחים ברמה אחרת? השאירו פרטים ונחזור אליכם תוך 24 שעות
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-300/90 to-orange-500/90 rounded-full mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900/90 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-300/90 to-orange-500/90 p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-2">מלאו את הטופס עכשיו</h2>
              <p className="text-orange-100">וקבלו הצעת מחיר מותאמת אישית תוך 24 שעות</p>
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
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-br from-blue-900/90 to-blue-700/90 text-white py-4 px-6 rounded-lg hover:from-blue-800/90hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed font-normal text-xl"
                >
                  {loading ? "שולח..." : "שלח עכשיו"}
                </button>
              </form>

              {message && (
                <div className={`mt-6 p-4 rounded-lg text-center ${
                  message.includes("תודה") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}>
                  <FaCheckCircle className="inline-block ml-2" />
                  {message}
                </div>
              )}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 text-center">
            <div className="flex flex-wrap justify-center gap-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                  <badge.icon className="text-orange-500/90 text-xl" />
                  <span className="text-gray-700 font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-16 bg-gradient-to-r from-orange-300/90 to-orange-500/90  text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            עדיין מתלבטים?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            אלפי עסקים כבר בחרו בנו כספק המשלוחים הבלעדי שלהם
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">1.2K</div>
              <div className="text-blue-100">מדרגים אותנו 5 כוכבים בגוגל</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">24/6</div>
              <div className="text-blue-100">שירות זמין</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-blue-100">בתי עסק מרוצים</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const benefits = [
  {
    icon: FaTruck,
    title: "משלוחים מהירים",
    description: "משלוחים באותו יום לכל רחבי הארץ"
  },
  {
    icon: FaClock,
    title: "זמינות 24/6",
    description: "שירות זמין מסביב לשעון כל ימות השנה"
  },
  {
    icon: FaShieldAlt,
    title: "אמינות מוכחת",
    description: "99.8% מהמשלוחים מגיעים בזמן ובשלמות"
  }
];

const trustBadges = [
  { icon: FaCheckCircle, text: "ללא עלויות נסתרות" },
  { icon: FaShieldAlt, text: "ביטוח מלא" },
  { icon: FaClock, text: "תגובה תוך 24 שעות" }
];

export default ContactForm;