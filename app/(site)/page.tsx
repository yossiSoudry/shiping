import Image from "next/image";
import { HeroImages } from "./HeroImages";
import HeroTestimonials from "./HeroTestimonials";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { CardHoverEffect } from "./HeroCardHoverEffect";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen w-full dark:bg-black bg-blue-800/5  dark:bg-grid-white/[0.2] bg-grid-orange-400/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col gap-10 h-fit">
          <div className="text-center pt-16">
            <p className="text-5xl md:text-7xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-blue-400 py-8">
              המרחקים קטנים
            </p>
            <p className="text-5xl md:text-7xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-orange-500">
              כשאנחנו בדרך...
            </p>
          </div>
          <HeroImages />
          {/* <Image
            width={2000}
            height={1000}
            src="/assets/logos/mini-truck-brand.png"
            alt="Logo"
          /> */}
        </div>
      </div>
      <CardHoverEffect />
      <h2 className="text-4xl text-center text-orange-500 my-6">
        מה הלקוחות שלנו אומרים?       
      </h2>
      <HeroTestimonials />
    </div>
  );
}
