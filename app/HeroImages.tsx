"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import React from "react";

export function HeroImages() {
  const images = [
    {
      src: "/assets/logos/mini-truck-brand.png",
      alt: "Mini truck brand logo"
    },
    {
      src: "/assets/logos/mini-van.png",
      alt: "Mini van brand logo"
    },
    {
      src: "/assets/logos/truck.png",
      alt: "Truck brand logo"
    },
  ];
  return (
    <ImagesSlider className="h-[20rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
      </motion.div>
    </ImagesSlider>
  );
}
