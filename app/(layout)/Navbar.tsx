"use client";
import Scrolled from "@/components/Scrolled";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Image } from "@nextui-org/react";
import {
  BadgeInfo,
  Contact2,
  HeartHandshake,
  Home,
  Layout,
  MenuIcon,
} from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const route = useRouter()

  const menuItems = [
    { title: "בית", href: "/", icon: <Home /> },
    { title: "אודות", href: "/about", icon: <BadgeInfo /> },
    { title: "השירותים שלנו", href: "/services", icon: <HeartHandshake /> },
    { title: "מה חדש", href: "/blog", icon: <Layout /> },
    { title: "צור קשר", href: "/contact", icon: <Contact2 /> },
  ];
  return (
    <Scrolled>
      <nav
        className="h-20 container flex justify-between gap-2 md:gap-4 items-center p-4"
        aria-label="Global"
      >
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon className="w-8 h-8 text-blue-900" />
            </SheetTrigger>
            <SheetContent>
              <div className="space-y-2 py-4 flex flex-col">
                {menuItems.map((item, id) => (
                  <SheetClose>
                    <div 
                      id={item.title}
                      className={`flex items-center gap-4 py-2 text-base font-semibold leading-7 text-blue-800 tap-highlight-transparent`}
                      onClick={()=>route.push(item.href)}
                    >
                      {item.icon}
                      {item.title}
                    </div>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex gap-4">
          <Link href="https://members.lionwheel.com/locate/locate_task?org=%D7%A9%D7%99%D7%A4%D7%99%D7%A0%D7%92%20%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D">
            <Button color="primary" variant="outline">
              בירור משלוח
            </Button>
          </Link>
          <Link href="https://members.lionwheel.com/?locale=he">
            <Button color="primary" variant="outline">
              כניסת משתמשים
            </Button>
          </Link>
        </div>

        <div className="gap-4 hidden lg:flex">
          {menuItems.map((item) => (
            <Link
              href={item.href}
              aria-current="page"
              className={`whitespace-nowrap text-blue-800 hover:opacity-70 active:text-orange-500 ${
                pathname == item.href
                  ? "text-orange-500 font-semibold"
                  : "dark:text-white"
              } duration-300`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="min-w-[150px] h-full pl-2 flex items-center justify-end"
        >
          <Image
            as={NextImage}
            width={200}
            height={80}
            src="/assets/logo.png"
            alt="Logo"
            priority
          />
        </Link>
      </nav>
    </Scrolled>
  );
};

export default Navbar;
