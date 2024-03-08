"use client";
import { useCallback, useEffect, useState } from "react";

function Scrolled({
    children,
  }: {
    children: React.ReactNode;
  }) {
  const [scrolled, setScrolled] = useState(false);
  let threshold = 10;
  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  return (
    <div
      className={`fixed top-0 w-full ${
        scrolled
          ? "shadow-md dark:shadow-xl h-[88px] bg-violet-50/80 dark:bg-gray-900/90 backdrop-blur-sm delay-75 duration-75"
          : ""
      } z-30 transition-all duration-300`}
    >
      {children}
    </div>
  );
}

export default Scrolled;