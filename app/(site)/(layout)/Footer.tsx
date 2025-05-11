"use client";

import {
  BadgeInfo,
  Clock,
  Contact2,
  Facebook,
  HeartHandshake,
  Home,
  Instagram,
  Layout,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { title: "בית", href: "/", icon: <Home className="w-4 h-4" /> },
    { title: "אודות", href: "/about", icon: <BadgeInfo className="w-4 h-4" /> },
    {
      title: "השירותים שלנו",
      href: "/services",
      icon: <HeartHandshake className="w-4 h-4" />,
    },
    { title: "מה חדש", href: "/blog", icon: <Layout className="w-4 h-4" /> },
    {
      title: "צור קשר",
      href: "/contact",
      icon: <Contact2 className="w-4 h-4" />,
    },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      text: "052-760-0768",
      href: "tel:052-760-0768",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "office@shipping.co.il",
      href: "mailto:office@shipping.co.il",
    },
    { icon: <MapPin className="w-4 h-4" />, text: "תל אביב, ישראל", href: "#" },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "ראשון-חמישי: 8:00-18:00",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/people/%D7%A9%D7%99%D7%A4%D7%99%D7%A0%D7%92-%D7%A9%D7%9C%D7%99%D7%97%D7%95%D7%99%D7%95%D7%AA/61568472593357/",
      label: "Facebook",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/p/DJZbrQFtimh/",
      label: "Instagram",
    },
    {
      icon: <MdEmail className="w-5 h-5" />,
      href: "mailto:office@shipping.co.il",
      label: "Gmail",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/972527600768",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logos/logo.png"
                alt="Logo"
                width={180}
                height={72}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed">
              שיפינג משלוחים - החברה המובילה בישראל למשלוחים מהירים ואמינים. אנו
              מספקים פתרונות לוגיסטיים מתקדמים לעסקים ופרטיים מאז 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-orange-400">
              קישורים מהירים
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-blue-100 hover:text-orange-400 transition-colors"
                  >
                    {link.icon}
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-orange-400">צור קשר</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="flex items-center gap-3 text-blue-100 hover:text-orange-400 transition-colors"
                  >
                    <span className="text-orange-400">{info.icon}</span>
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-orange-400">
              הישארו מעודכנים
            </h3>
            <p className="text-blue-100 text-sm">
              הירשמו לניוזלטר שלנו וקבלו עדכונים על מבצעים ושירותים חדשים
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="כתובת אימייל"
                className="w-full px-4 py-2 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:border-orange-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                הרשמה
              </button>
            </form>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3">עקבו אחרינו</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-blue-800 hover:bg-orange-400 flex items-center justify-center transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
            <div>© {currentYear} שיפינג משלוחים. כל הזכויות שמורות.</div>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-orange-400 transition-colors"
              >
                מדיניות פרטיות
              </Link>
              <Link
                href="/terms"
                className="hover:text-orange-400 transition-colors"
              >
                תנאי שימוש
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-orange-400 transition-colors"
              >
                הצהרת נגישות
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
