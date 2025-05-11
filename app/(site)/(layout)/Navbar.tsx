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
} from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
    { title: "בית", href: "/", icon: <Home /> },
    { title: "אודות", href: "/about", icon: <BadgeInfo /> },
    { title: "השירותים שלנו", href: "/services", icon: <HeartHandshake /> },
    { title: "מה חדש", href: "/blog", icon: <Layout /> },
    { title: "צור קשר", href: "/contact", icon: <Contact2 /> },
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
      <div
        className="h-20 container flex justify-between gap-2 md:gap-4 items-center p-4"
        aria-label="Global"
      >
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon className="w-8 h-8 text-blue-900" />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between">
              <div className="space-y-2 py-4 flex flex-col">
                {menuItems.map((item, id) => (
                  <SheetClose key={id}>
                    <div
                      id={item.title}
                      className={`flex items-center gap-4 py-2 text-base font-semibold leading-7 text-blue-900/90 tap-highlight-transparent`}
                      onClick={() => route.push(item.href)}
                    >
                      <div className="text-orange-400/90">{item.icon}</div>
                      {item.title}
                    </div>
                  </SheetClose>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <Link href="https://members.lionwheel.com/locate/locate_task?org=%D7%A9%D7%99%D7%A4%D7%99%D7%A0%D7%92%20%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D">
                  <Button
                    color="primary"
                    variant="outline"
                    className="w-full bg-orange-400/90 text-white gap-2"
                  >
                    <ScanBarcode className="w-4 h-4" />
                    בירור משלוח
                  </Button>
                </Link>
                <Link href="https://members.lionwheel.com/?locale=he">
                  <Button
                    color="primary"
                    variant="outline"
                    className="w-full bg-blue-900/90 text-white gap-2"
                  >
                    <UsersRound className="w-4 h-4"  />
                    כניסת משתמשים
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Tablet Buttons */}
        <div className="hidden md:max-lg:flex gap-4">
          <Link href="https://members.lionwheel.com/locate/locate_task?org=%D7%A9%D7%99%D7%A4%D7%99%D7%A0%D7%92%20%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D">
            <Button
              color="primary"
              variant="outline"
              size="icon"
              className="bg-orange-400/90 hover:bg-orange-400/70 text-white hover:text-white gap-2"
            >
              <ScanBarcode className="w-5 h-5"  />
            </Button>
          </Link>
          <Link href="https://members.lionwheel.com/?locale=he">
            <Button
              color="primary"
              variant="outline"
              size="icon"
              className="bg-blue-900/90 hover:bg-blue-900/70 text-white hover:text-white gap-2"
            >
              <UsersRound className="w-5 h-5"  />
            </Button>
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4">
          <Link href="https://members.lionwheel.com/locate/locate_task?org=%D7%A9%D7%99%D7%A4%D7%99%D7%A0%D7%92%20%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D">
            <Button
              color="primary"
              variant="outline"
              className="bg-orange-400/90 hover:bg-orange-400/70 text-white hover:text-white gap-2"
            >
              <ScanBarcode className="w-4 h-4"  />
              בירור משלוח
            </Button>
          </Link>
          <Link href="https://members.lionwheel.com/?locale=he">
            <Button
              color="primary"
              variant="outline"
              className="bg-blue-900/90 hover:bg-blue-900/70 text-white hover:text-white gap-2"
            >
              <UsersRound className="w-4 h-4"  />
              כניסת משתמשים
            </Button>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="gap-4 hidden md:flex">
          {menuItems.map((item, id) => (
            <Link
              key={id}
              href={item.href}
              aria-current="page"
              className={cn(
                "whitespace-nowrap hover:opacity-70 active:text-orange-400 duration-300",
                pathname == item.href
                  ? "text-orange-400 font-semibold"
                  : "text-blue-900/90"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="min-w-[150px] h-full pl-2 flex items-center justify-end"
        >
          <Image
            as={NextImage}
            width={200}
            height={80}
            src="/assets/logos/logo.png"
            alt="Logo"
            priority
            className="object-contain"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;