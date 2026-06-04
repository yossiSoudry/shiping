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
      text: "077-212-0262",
      href: "tel:077-212-0262",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "office@shipping2016.com.co.il",
      href: "mailto:office@shipping2016.com.co.il",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "הסדנה 7, פתח תקווה",
      href: "https://maps.google.com/?q=הסדנה+7+פתח+תקווה",
    },
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
      href: "mailto:office@shipping2016.com.co.il",
      label: "Gmail",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/972527600768",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="relative z-40 bg-brand-blue-900 text-white">
      {/* פס אקצנט עליון */}
      <div className="h-1 w-full bg-gradient-to-l from-brand-orange-400 via-brand-orange to-brand-blue-400" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
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
            <p className="max-w-64 text-sm leading-relaxed text-brand-blue-100/80">
              שיפינג משלוחים - החברה המובילה בישראל למשלוחים מהירים ואמינים. אנו
              מספקים פתרונות לוגיסטיים מתקדמים לעסקים ופרטיים מאז 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-base font-bold uppercase tracking-wide text-brand-orange-400">
              קישורים מהירים
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-sm text-brand-blue-100/80 transition-colors hover:text-brand-orange-400"
                  >
                    <span className="text-brand-blue-300 transition-colors group-hover:text-brand-orange-400">
                      {link.icon}
                    </span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-base font-bold uppercase tracking-wide text-brand-orange-400">
              צור קשר
            </h3>
            <ul className="space-y-3.5">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="group flex items-center gap-3 text-sm text-brand-blue-100/80 transition-colors hover:text-brand-orange-400"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-brand-orange-400 transition-colors group-hover:bg-brand-orange/15">
                      {info.icon}
                    </span>
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="w-fit space-y-5">
            <h3 className="text-base font-bold uppercase tracking-wide text-brand-orange-400">
              עקבו אחרינו
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:-translate-y-0.5 hover:border-brand-orange/40 hover:bg-brand-orange hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          {/* <div className="space-y-4">
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
                className="w-full px-4 py-2 rounded-lg bg-blue-800/90border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:border-orange-400/90 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-orange-400/90 hover:bg-orange-500/90 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                הרשמה
              </button>
            </form>
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-brand-blue-200/70 md:flex-row">
            <div>© {currentYear} שיפינג משלוחים. כל הזכויות שמורות.</div>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="transition-colors hover:text-brand-orange-400"
              >
                מדיניות פרטיות
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-brand-orange-400"
              >
                תנאי שימוש
              </Link>
              <Link
                href="/accessibility"
                className="transition-colors hover:text-brand-orange-400"
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
