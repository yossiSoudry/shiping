"use client"

import Image from "next/image";
import LidForm from "../LidForm";
import dynamic from "next/dynamic";

const Hero = () => {
  const DotLottieReact = dynamic(
    () =>
      import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact), // וודא שהרכיב נמצא כאן
    { ssr: false }
  );
  return (
    <section
      dir="rtl"
      className="relative w-full md:min-h-screen overflow-hidden pb-10"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-sky-100 w-[100%] h-20 md:h-64 z-10 transform -translate-y-[20%] -translate-x-[10%] -rotate-[14deg] origin-top-left" />
      <div className="absolute -top-20 lg:top-20 -left-96 xl:left-0 min-w-[240%] h-[125%] bg-orange-100 transform -translate-y-[20%] -translate-x-[10%] -rotate-[14deg] origin-top-left" />
      <div className="absolute -top-36 left-2 z-20 hidden md:block">
        <Image
          src="/logo.svg"
          alt="Shipping Logo"
          width={400}
          height={120}
          priority
        />
      </div>
      <div className="absolute -top-24 -left-4 z-20 md:hidden">
        <Image
          src="/logo.svg"
          alt="Shipping Logo"
          width={200}
          height={80}
          priority
        />
      </div>

      <div className="relative container mx-auto px-4 h-full">
        <div className="flex flex-col lg:flex-row md:pt-20 2xl:px-10">
          <div className="w-full lg:w-1/2 md:space-y-4 pt-10">
            <div className="text-sky-800 text-base xl:text-2xl leading-tight md:leading-relaxed">
              <p>
                <span>עם </span>
                <span className="font-bold">קווי לילה</span>
              </p>
              <p>
                <span className="font-bold">מענה אנושי</span>
                <span> ואישי</span>
              </p>
              <p>ומערכת המטפלת</p>
              <p className="font-bold">בפניות חריגות גם מחוץ לשעות הפעילות</p>
            </div>

            <div className="md:space-y-2 mt-2">
              <h1 className="text-3xl sm:text-4xl md:text-4 lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-7 md:leading-tight">
                <span className="font-light">משלוחים</span>
                <br />
                במהירות שיא
              </h1>
              <h2 className="text-lx md:text-3xl font-extralight">
                אתם והלקוחות מרוצים!
              </h2>
            </div>
          </div>

          <div className="relative mt-20 w-1/2 h-[600px] hidden 2xl:block">
            <Image
              src="/truck.png"
              alt="משאית"
              width={520}
              height={300}
              className="absolute bottom-40 -left-8"
            />
            <Image
              src="/courier.png"
              alt="שליח"
              width={300}
              height={500}
              className="absolute bottom-8  left-[55%]"
            />
            <div
              style={{ width: "140px", height: "140px" }}
              className="absolute -top-10 left-[100%] z-0"
            >
              <DotLottieReact
                src="https://lottie.host/4687ddd8-b371-464b-87df-6a7cebbb79ab/CuPokN63zW.lottie"
                autoplay
              />
            </div>
            <Image
              src="/packages.png"
              alt="חבילות"
              width={460}
              height={150}
              className="absolute bottom-0 left-[58%]"
            />
          </div>
          <div className="relative mt-20 w-1/2 h-[600px] hidden xl:block 2xl:hidden">
            <Image
              src="/truck.png"
              alt="משאית"
              width={520}
              height={300}
              className="absolute bottom-40 -left-16"
            />
            <Image
              src="/courier.png"
              alt="שליח"
              width={300}
              height={500}
              className="absolute bottom-8  left-[55%]"
            />
            <div
              style={{ width: "140px", height: "140px" }}
              className="absolute -top-10 left-[100%] z-0"
            >
              <DotLottieReact
                src="https://lottie.host/4687ddd8-b371-464b-87df-6a7cebbb79ab/CuPokN63zW.lottie"
                autoplay
              />
            </div>
            <Image
              src="/packages.png"
              alt="חבילות"
              width={460}
              height={150}
              className="absolute bottom-0 left-[58%]"
            />
          </div>
          <div className="relative mt-20 w-1/2 h-[600px] hidden lg:block xl:hidden">
            <Image
              src="/truck.png"
              alt="משאית"
              width={520}
              height={300}
              className="absolute bottom-40 -left-20"
            />
            <Image
              src="/courier.png"
              alt="שליח"
              width={300}
              height={500}
              className="absolute bottom-8  left-[60%]"
            />
            <div
              style={{ width: "140px", height: "140px" }}
              className="absolute -top-10 left-[100%] z-0"
            >
              <DotLottieReact
                src="https://lottie.host/4687ddd8-b371-464b-87df-6a7cebbb79ab/CuPokN63zW.lottie"
                autoplay
              />
            </div>
            <Image
              src="/packages.png"
              alt="חבילות"
              width={460}
              height={150}
              className="absolute bottom-0 left-[60%]"
            />
          </div>
          <div className="!relative w-full hidden md:block lg:hidden">
            <Image
              src="/truck.png"
              alt="משאית"
              width={320}
              height={150}
              className="absolute -top-[70px] -left-4"
            />
            <Image
              src="/courier.png"
              alt="שליח"
              width={120}
              height={200}
              className="absolute -top-16 scale-x-[-1] left-[46%]"
            />
            <div
              style={{ width: "140px", height: "140px" }}
              className="absolute -top-60 left-[30%] z-0"
            >
              <DotLottieReact
                src="https://lottie.host/4687ddd8-b371-464b-87df-6a7cebbb79ab/CuPokN63zW.lottie"
                autoplay
              />
            </div>
            <Image
              src="/packages.png"
              alt="חבילות"
              width={220}
              height={50}
              className="absolute top-16 left-[42%]"
            />
          </div>
          <div className="!relative w-full hidden sm:block md:hidden">
            <Image
              src="/truck.png"
              alt="משאית"
              width={220}
              height={150}
              className="absolute -top-2 -left-0"
            />
            <Image
              src="/courier.png"
              alt="שליח"
              width={100}
              height={200}
              className="absolute -top-16 scale-x-[-1] left-[46%]"
            />
            <div
              style={{ width: "70px", height: "70px" }}
              className="absolute -top-24 left-[30%] z-50"
            >
              <DotLottieReact
                src="https://lottie.host/4687ddd8-b371-464b-87df-6a7cebbb79ab/CuPokN63zW.lottie"
                autoplay
              />
            </div>
            <Image
              src="/packages.png"
              alt="חבילות"
              width={200}
              height={50}
              className="absolute top-16 left-[42%]"
            />
          </div>
          <div className="!relative w-full sm:hidden">
            <Image
              src="/truck.png"
              alt="משאית"
              width={220}
              height={150}
              className="absolute -top-0 -left-0"
            />
            <Image
              src="/courier.png"
              alt="שליח"
              width={80}
              height={160}
              className="absolute -top-0 scale-x-[-1] left-[60%]"
            />
            <div
              style={{ width: "70px", height: "70px" }}
              className="absolute -top-20 left-0 z-50"
            >
              <DotLottieReact
                src="https://lottie.host/4687ddd8-b371-464b-87df-6a7cebbb79ab/CuPokN63zW.lottie"
                autoplay
              />
            </div>
            <Image
              src="/packages.png"
              alt="חבילות"
              width={140}
              height={50}
              className="absolute top-24 left-[52%]"
            />
          </div>
        </div>
        <div className="w-full flex justify-center mt-32 lg:-mt-10 z-30">
          <LidForm title={false} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
