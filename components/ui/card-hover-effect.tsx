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
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
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
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl opacity-10 blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl opacity-5" />
              </motion.div>
            )}
          </AnimatePresence>
          
          <Card>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-3xl" />
            <CardIcon>{item.icon}</CardIcon>
            {item.title && <CardTitle>{item.title}</CardTitle>}
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-white",
        "border border-gray-100 group-hover:border-orange-200",
        "relative z-20 transition-all duration-300",
        "group-hover:shadow-xl group-hover:-translate-y-1",
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
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("mb-4", className)}>
      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <div className="text-white">
          {children}
        </div>
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