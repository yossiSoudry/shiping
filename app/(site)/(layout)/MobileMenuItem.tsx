"use client";

import Link from "next/link";
import { IconType } from "react-icons";

interface MobileMenuItemProps {
  label: string;
  href: string;
  icon?: IconType
  handleClose: () => void;
}

const MobileMenuItem = ({ label, href, icon: Icon, handleClose }:MobileMenuItemProps) => {
  return (
        <Link
          id={label}
          className={`flex items-center gap-4 py-2 text-base font-semibold leading-7 text-gray-900 tap-highlight-transparent`}
          onClick={handleClose}
          href={href}
        >
          {Icon && (
            <div className="">
              <Icon />
            </div>
          )}
          {label}
        </Link>
  );
};

export default MobileMenuItem;
