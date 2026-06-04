"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    icon: ReactNode;
    title?: string;
    description: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4",
        className
      )}
    >
      {items.map((item, idx) => {
        const accent = idx % 2 === 0 ? "orange" : "blue";
        return (
          <div
            key={idx}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  className="absolute inset-0 h-full w-full rounded-2xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.1 },
                  }}
                >
                  <div
                    className={cn(
                      "absolute inset-0 rounded-2xl opacity-10 blur-xl",
                      accent === "orange" ? "bg-brand-orange" : "bg-brand-blue"
                    )}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <Card accent={accent}>
              <CardIcon accent={accent}>{item.icon}</CardIcon>
              {item.title && <CardTitle>{item.title}</CardTitle>}
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  accent = "orange",
  children,
}: {
  className?: string;
  accent?: "orange" | "blue";
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-white",
        "border border-slate-100 relative z-20 transition-all duration-300",
        "group-hover:shadow-xl group-hover:-translate-y-1.5",
        accent === "orange"
          ? "group-hover:border-brand-orange/30"
          : "group-hover:border-brand-blue/30",
        className
      )}
    >
      <div className="relative z-50 p-8 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export const CardIcon = ({
  className,
  accent = "orange",
  children,
}: {
  className?: string;
  accent?: "orange" | "blue";
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("mb-5", className)}>
      <div
        className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md",
          accent === "orange"
            ? "bg-brand-orange/10 text-brand-orange"
            : "bg-brand-blue/10 text-brand-blue"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "text-xl font-bold text-gray-900 mb-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-gray-600 leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};