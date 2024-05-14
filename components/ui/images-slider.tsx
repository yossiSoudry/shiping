"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

type ImageType = {
  src: string;
  alt: string;
};

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: ImageType[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<ImageType[]>([]);


  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const loadImages = () => {
      setLoading(true);
      const loadPromises = images.map((image) => {
        return new Promise<ImageType>((resolve, reject) => {
          const img = new Image();
          img.src = image.src;
          img.onload = () => resolve({
            src: img.src,
            alt: image.alt
          });
          img.onerror = reject;
        });
      });
  
      Promise.all(loadPromises)
        .then((loadedImages) => {
          setLoadedImages(loadedImages);
          setLoading(false);
        })
        .catch((error) => console.error("Failed to load images", error));
    };
  
    loadImages();
  }, []);
  
  
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [handleNext, handlePrevious, autoplay]); // הוספת תלותות
  

  // useEffect(() => {}, []);

  const slideVariants = {
    initial: {
      opacity: 1,
      x: "150%",
      transition: {
        duration: 9,
        ease: "linear"
      },
    },
    visible: {
      opacity: 1,
      x: "-150%",
      transition: {
        duration: 9,
        // ease: "ease-in-out"
      },
    },
    upExit: {
      opacity: 1,
      x: "-150%",
      transition: {
        duration: 9,
        // ease: "ease-in-out"
      },
    },
    downExit: {
      opacity: 1,
      x: "150%",
      transition: {
        duration: 9,
        // ease: "ease-in-out"
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div className={cn("absolute inset-0 z-40", overlayClassName)} />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex].src} // עדכון לקוד החדש
            alt={loadedImages[currentIndex].alt} // הוספת alt
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-contain object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};
