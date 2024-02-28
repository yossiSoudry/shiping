import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

const TopNavbar = () => {
  return (
    <Navbar shouldHideOnScroll className="container" maxWidth="full">
      <NavbarContent justify="start">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="https://members.lionwheel.com/locate/locate_task?org=%D7%A9%D7%99%D7%A4%D7%99%D7%A0%D7%92%20%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D"
            variant="flat"
          >
            בירור משלוח
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="https://members.lionwheel.com/?locale=he">כניסת משתמשים</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            בית
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            אודות
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            השירותים שלנו
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            מה חדש
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            צור קשר
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Image
          as={NextImage}
          width={200}
          height={80}
          src="/assets/logo.png"
          alt="Logo"
          priority
        />
      </NavbarContent>
    </Navbar>
  );
};

export default TopNavbar;
