import React from "react";
import { ClintcardIcon, ClintIcon } from "./common/Icon";
import Image from "next/image";
import { Clintcard } from "./common/Helper";

const Ourclient = () => {
  return (
    <div>
      <Image
        src="/img/client-top-img.png"
        width={2000}
        height={190}
        alt="client-top-img.png"
      />
      <div className=" bg-[#FFEFED] ">
        <div className=" max-w-[1232px] w-full mx-auto px-4 md:pb-[80px] sm:pb-[65px] pb-10 ">
          <p className=" text-[48px] font-bold font-Atma text-center ">
            What our client says
          </p>
          <p className=" text-[#4E4E4E] max-w-[588px] w-full mx-auto text-center font-Metropolis mt-4 mb-[80px] ">
            Trusted SEO Agency In BrisbaneWork with Paul Napper and outsmart
            your competitors to the top of Google with an SEO strategy (without
            the BS).
          </p>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4 max-lg:gap-y-16 ">
            {Clintcard.map((item, index) => (
              <div
                key={index}
                className=" max-w-[384px] w-full mx-auto rounded-[8px] p-6 bg-white relative h-fit "
              >
                <div className=" w-[80px] h-[80px] bg-white shadow-[0px_16px_32px] shadow-[rgba(0,0,0,0.08)] rounded-full mx-auto flex justify-center items-center left-[39%] absolute top-[-50px] ">
                  <Image
                    src={item.icon}
                    width={60}
                    height={28}
                    alt="client-img-1.png"
                  />
                </div>
                <span className=" mx-auto flex items-center justify-center mt-8 ">
                  <ClintcardIcon />
                </span>
                <p className=" text-[20px] font-Atma capitalize font-semibold text-center mt-4 ">
                  Mind-blowing Services
                </p>
                <p className=" max-w-[336px] w-full text-[#424242] font-DMSans text-[18px] mt-4 mb-6 text-center ">
                  Viverra vel vitae libero iaculis. Tellus vel volutpat sem sit
                  egestas aliquam. Pharetra dictum volutpat non velit lorem
                  vitae amet.
                </p>
                <p className=" capitalize text-[20px] font-Atma font-semibold text-center ">
                  elezabeth sarian
                </p>
                <p className=" mt-1 text-[#424242] font-DMSans text-[14px] text-center ">
                  Student at University of Connecticut
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourclient;
