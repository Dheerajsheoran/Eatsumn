import Image from "next/image";
import React from "react";
import { Automatecard } from "./common/Helper";

const HowWeAutomate = () => {
  return (
    <>
      <div className=" max-w-[1232px] mx-auto w-full px-4 md:pt-[100px] sm:pt-[70px] pt-[40px] md:pb-[80px] sm:pb-[50px] pb-[30px] ">
        <div className=" flex items-center justify-between gap-2 max-lg:flex-col-reverse ">
          <div className=" max-w-[558px] w-full ">
            <p className=" font-Atma md:text-[48px] sm:text-[38px] text-[30px] font-bold mb-6 ">
              How We Automate Your Meal Planning
            </p>
            <p className=" sm:text-[18px] text-[15px] font-DMSans text-[#4E4E4E] ">
              Eat This Much creates personalized meal plans based on your food
              preferences, budget, and schedule. Reach your diet and nutritional
              goals with our calorie calculator, weekly meal plans, grocery
              lists and more.
            </p>
            <div className=" flex flex-col gap-4 mt-6 ">
              {Automatecard.map((item, index) => (
                <div
                  key={index}
                  className=" sm:p-4 py-3 px-2 bg-[#FFF1F0] rounded-[16px] flex gap-4 items-center "
                >
                  <div className="bg-[url(/img/Automate-overlay.png)] max-w-[31px] w-full bg-center bg-no-repeat bg-cover flex items-center justify-center h-[26px]">
                    <p className="text-[26px] font-Atma text-[#EF4D3C] font-bold ">
                      {item.no}
                    </p>
                  </div>
                  <p className=" font-medium font-Atma max-sm:text-[13px] ">
                    {item.data}
                  </p>
                </div>
              ))}
            </div>
            <button className="border font-Atma text-white bg-[#EF4D3C] max-w-[172px] w-full rounded-[30px] py-[14px] px-6 mt-6 hover:bg-transparent hover:text-[#EF4D3C] duration-300 border-[#EF4D3C] ">
              Genarate Meals
            </button>
          </div>
          <div className=" ">
            <Image
              src="/img/automate-img.png"
              width={588}
              height={589}
              alt="automate-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeAutomate;
