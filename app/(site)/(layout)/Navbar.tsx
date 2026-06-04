"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Image, cn } from "@nextui-org/react";
import {
  BadgeInfo,
  Contact2,
  HeartHandshake,
  Home,
  Layout,
  MenuIcon,
  ScanBarcode,
  UsersRound,
  Search,
  BellRing,
} from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const route = useRouter();
  const [scrolled, setScrolled] = useState(false);

  // Check initial scroll position and listen to scroll events
  useEffect(() => {
    const checkScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Check on mount
    checkScroll();

    // Listen to scroll events
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const menuItems = [
    { title: "בית", href: "/", icon: <Home className="w-5 h-5" /> },
    { title: "אודות", href: "/about", icon: <BadgeInfo className="w-5 h-5" /> },
    {
      title: "השירותים שלנו",
      href: "/services",
      icon: <HeartHandshake className="w-5 h-5" />,
    },
    { title: "מה חדש", href: "/blog", icon: <Layout className="w-5 h-5" /> },
    {
      title: "צור קשר",
      href: "/contact",
      icon: <Contact2 className="w-5 h-5" />,
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/70"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 gap-4 max-sm:flex-row-reverse">
          <div className="hidden lg:flex items-center gap-4">
            <Link href="https://members.lionwheel.com/locate/locate_task?org=%D7%A9%D7%99%D7%A4%D7%99%D7%A0%D7%92%20%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D">
              <Button
                variant="outline"
                className="gap-2 rounded-full border-brand-orange/60 text-brand-orange hover:border-brand-orange hover:bg-brand-orange/10 hover:text-brand-orange-600"
              >
                <ScanBarcode className="w-4 h-4" />
                בירור משלוח
              </Button>
            </Link>

            <Link href="https://members.lionwheel.com/?locale=he">
              <Button className="gap-2 rounded-full bg-gradient-to-br from-brand-blue-700 to-brand-blue-500 text-white shadow-md shadow-brand-blue/20 hover:from-brand-blue-800 hover:to-brand-blue-600">
                <UsersRound className="w-4 h-4" />
                כניסת משתמשים
              </Button>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {menuItems.map((item, id) => (
              <Link
                key={id}
                href={item.href}
                className="relative group px-4 py-2"
              >
                <span
                  className={cn(
                    "flex items-center gap-2 text-lg font-medium transition-colors",
                    pathname === item.href
                      ? "text-brand-orange"
                      : "text-brand-blue-800 hover:text-brand-orange"
                  )}
                >
                  {item.title}
                </span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-brand-orange"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-8">
            {/* Main Navigation Links */}

            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  as={NextImage}
                  width={200}
                  height={80}
                  src="/assets/logos/logo.png"
                  alt="Logo"
                  priority
                  className="h-16 w-auto object-contain"
                />
              </motion.div>
            </Link>
          </div>

          {/* Mobile/Tablet Navigation */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Tablet Buttons */}
            <div className="hidden md:flex gap-2">
              <Link href="https://members.lionwheel.com/locate/locate_task?org=%D7%A9%D7%99%D7%A4%D7%99%D7%A0%D7%92%20%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-brand-orange/60 text-brand-orange hover:border-brand-orange hover:bg-brand-orange/10"
                >
                  <ScanBarcode className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="https://members.lionwheel.com/?locale=he">
                <Button
                  size="icon"
                  className="rounded-full bg-brand-blue-700 text-white hover:bg-brand-blue-800"
                >
                  <UsersRound className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-100"
                >
                  <MenuIcon
                    className={cn(
                      "w-6 h-6 text-blue-800",
                      // scrolled ? "text-blue-800" : "text-white"
                    )}
                  />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Items */}
                  <div className="flex-1 pt-8">
                    <div className="space-y-1">
                      {menuItems.map((item, id) => (
                        <SheetClose key={id} asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors",
                              pathname === item.href
                                ? "bg-brand-orange/10 text-brand-orange-600"
                                : "text-slate-700 hover:bg-slate-50"
                            )}
                          >
                            <span className="text-brand-orange">{item.icon}</span>
                            <span className="font-medium">{item.title}</span>
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="border-t border-slate-200 pt-6 pb-8 space-y-3">
                    <Link href="https://members.lionwheel.com/locate/locate_task?org=%D7%A9%D7%99%D7%A4%D7%99%D7%A0%D7%92%20%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D">
                      <Button
                        variant="outline"
                        className="w-full gap-2 rounded-full border-brand-orange/60 text-brand-orange hover:border-brand-orange hover:bg-brand-orange/10 hover:text-brand-orange-600"
                      >
                        <ScanBarcode className="w-4 h-4" />
                        בירור משלוח
                      </Button>
                    </Link>
                    <Link href="https://members.lionwheel.com/?locale=he">
                      <Button className="mt-4 w-full gap-2 rounded-full bg-gradient-to-br from-brand-blue-700 to-brand-blue-500 text-white shadow-md shadow-brand-blue/20 hover:from-brand-blue-800 hover:to-brand-blue-600">
                        <UsersRound className="w-4 h-4" />
                        כניסת משתמשים
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
