import Image from "next/image";
import React from "react";

const Receive = () => {
  return (
    <>
      <div className=" max-w-[1232px] w-full mx-auto px-4 md:py-[80px] sm:py-[55px] py-10 ">
        <div className=" flex items-center justify-between gap-4 max-lg:flex-col ">
          <div className=" flex flex-col sm:gap-6 gap-3 ">
            <p className=" md:text-[48px] sm:text-[38px] text-[30px] font-Atma font-bold leading-[116%] ">
              Receive Your <br /> Personalized Meal Plan
            </p>
            <p className=" max-w-[588px] w-full font-Metropolis text-[#4E4E4E] max-sm:text-[14px] ">
              Based on your school's menu and your personal preferences, receive
              a weekly meal plan. This plan balances what's offered at school
              with additional meal suggestions to ensure nutritional
              completeness.
            </p>
            <button className="border font-Atma text-white bg-[#EF4D3C] max-w-[164px] w-full rounded-[30px] py-[14px] px-6 mt-6 hover:bg-transparent hover:text-[#EF4D3C] duration-300 border-[#EF4D3C] ">
              Genarate Meals
            </button>
          </div>
          <div>
            <Image
              src="/img/recive-img.png"
              width={588}
              height={536}
              alt="recive-img.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Receive;
