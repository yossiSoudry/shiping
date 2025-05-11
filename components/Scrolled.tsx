"use client";
import { useCallback, useEffect, useState } from "react";

function Scrolled({
  children,
  threshold = 10,
}: {
  children: React.ReactNode;
  threshold?: number;
}) {
  const [scrolled, setScrolled] = useState(false);

  const checkScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    // Check initial scroll position on mount
    checkScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", checkScroll);
    
    // Cleanup
    return () => window.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  return (
    <div
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/20 backdrop-blur-lg shadow-lg border-b border-gray-200"
          : "bg-white/20 backdrop-blur-sm"
      }`}
    >
      {children}
    </div>
  );
}

export default Scrolled;