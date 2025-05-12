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
        "fixed top-0 w-full z-40 transition-all duration-300",
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-lg border-b border-gray-200"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 gap-4 max-sm:flex-row-reverse">
          <div className="hidden lg:flex items-center gap-4">
            <Link href="https://members.lionwheel.com/locate/locate_task?org=%D7%A9%D7%99%D7%A4%D7%99%D7%A0%D7%92%20%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D">
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 gap-2"
              >
                <ScanBarcode className="w-4 h-4" />
                בירור משלוח
              </Button>
            </Link>

            <Link href="https://members.lionwheel.com/?locale=he">
              <Button className="bg-gradient-to-br from-blue-900 to-blue-800 hover:bg-blue-800 text-white gap-2">
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
                    "flex items-center gap-2 text-lg transition-colors",
                    pathname === item.href
                      ? "text-orange-500"
                      : scrolled
                      ? "text-sky-800 hover:text-orange-500"
                      : "text-sky-900 hover:text-orange-300"
                  )}
                >
                  {item.title}
                </span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
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
                  className="border-orange-500 text-orange-500 hover:bg-orange-50"
                >
                  <ScanBarcode className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="https://members.lionwheel.com/?locale=he">
                <Button
                  size="icon"
                  className="bg-blue-900 hover:bg-blue-800 text-white"
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
                              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                              pathname === item.href
                                ? "bg-orange-50 text-orange-600"
                                : "text-gray-700 hover:bg-gray-50"
                            )}
                          >
                            <span className="text-orange-500">{item.icon}</span>
                            <span className="font-medium">{item.title}</span>
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="border-t border-gray-200 pt-6 pb-8 space-y-3">
                    <Link href="https://members.lionwheel.com/locate/locate_task?org=%D7%A9%D7%99%D7%A4%D7%99%D7%A0%D7%92%20%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D">
                      <Button
                        variant="outline"
                        className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 gap-2"
                      >
                        <ScanBarcode className="w-4 h-4" />
                        בירור משלוח
                      </Button>
                    </Link>
                    <Link href="https://members.lionwheel.com/?locale=he">
                      <Button className="w-full bg-gradient-to-br from-blue-900 to-blue-800 hover:bg-blue-800 text-white gap-2 mt-4">
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
