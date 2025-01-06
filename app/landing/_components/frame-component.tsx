import type { NextPage } from "next";
import Image from "next/image";
import LidForm from "./LidForm";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start gap-[7px] max-w-full text-center text-18xl text-gray font-heebo ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-px max-w-full mq1698:flex-wrap">
        <div className="w-full flex flex-col items-start justify-start gap-[68px] shrink-0 max-w-full mq450:gap-[17px] mq900:gap-[34px]">
          <div className="w-full relative max-w-full">
            <div className="m-0 absolute top-[678px] left-[465px] z-[3]">
            <LidForm />
            </div>
            <Image
              className="absolute top-[74px] left-[2px] w-[423px] h-[109px] object-cover z-[2]"
              loading="lazy"
              width={423}
              height={109}
              alt=""
              src="/logo.png"
            />
            <Image
              className="absolute top-[231px] left-[688px] w-56 h-56 overflow-hidden z-[3]"
              loading="lazy"
              width={224}
              height={224}
              alt=""
              src="/clock.svg"
            />
            <Image
              className="absolute top-[304px] w-[637px] h-[414px] object-cover z-[4]"
              width={637}
              height={414}
              alt=""
              src="/truck.png"
            />
            <Image
              className="absolute top-[210px] left-[481px] w-[258px] h-[490px] object-cover z-[5]"
              width={258}
              height={490}
              alt=""
              src="/courier.png"
            />
            <Image
              className="absolute top-[522px] left-[508px] w-[439px] h-[205px] object-cover z-[6]"
              width={439}
              height={205}
              alt=""
              src="/packages.png"
            />
          </div>

         
        </div>
      </div>

    </section>
  );
};

export default FrameComponent;
