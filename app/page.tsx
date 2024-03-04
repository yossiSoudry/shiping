import Image from "next/image";
import { HeroImages } from "./HeroImages";

export default function Home() {
  return (
    <div className="">
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-orange-400/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="my-10 flex flex-col gap-10 h-fit">
          <div className="text-center">
            <p className="text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-blue-400 py-8">
              המרחקים קטנים
            </p>
            <p className="text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-orange-500">
              כשאנחנו בדרך...
            </p>
          </div>
          <HeroImages />
          {/* <Image
            width={2000}
            height={1000}
            src="/assets/mini-truck-brand.png"
            alt="Logo"
          /> */}
        </div>
      </div>
      <div></div>
    </div>
  );
}
