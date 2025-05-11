"use client";

import { motion } from "framer-motion";
import { FaTruck, FaGlobe, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    icon: FaTruck,
    title: "משלוחים מהירים",
    description: "משלוחים באותו יום לכל רחבי הארץ. שירות אקספרס מהיר במיוחד לאזורי גוש דן והמרכז",
    link: "/services"
  },
  {
    icon: FaGlobe,
    title: "פריסה ארצית",
    description: "רשת הפצה הפרוסה בכל רחבי הארץ, מקריית שמונה ועד אילת. מרכזי לוגיסטיקה אסטרטגיים",
    link: "/services"
  },
  {
    icon: FaShieldAlt,
    title: "ביטוח מלא",
    description: "כל משלוח מבוטח באופן מלא. שקט נפשי מוחלט עבורכם ועבור הלקוחות שלכם",
    link: "/services"
  }
];

export default function ServicesSection() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          השירותים שלנו
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link href={service.link}>
                <span className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                  למידע נוסף ←
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}