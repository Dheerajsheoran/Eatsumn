import React from "react";
import { Ourfeaturecard } from "./common/Helper";

const OurFeatures = () => {
  return (
    <div className=" bg-[url(/img/our-feature-bg.png)] bg-no-repeat  ">
      <div className=" max-w-[1232px] w-full mx-auto px-4 lg:py-[110px] md:py-[90px] sm:py-[60px] py-10 ">
        <div className=" md:mb-10 mb-6 ">
          <p className=" font-Atma md:text-[48px] sm:text-[38px] text-[30px] font-bold text-center mb-4 ">
            Our Features
          </p>
          <p className=" max-w-[546px] w-full mx-auto text-[#4E4E4E] text-center font-Metropolis max-sm:text-[14px] ">
            Eat This Much creates personalized meal plans based on your food
            preferences, budget, and schedule. Reach your diet and nutritional
            goals with our calorie calculator, weekly meal plans, grocery lists
            and more.
          </p>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
          {Ourfeaturecard.map((item, index) => (
            <div
              key={index}
              className=" max-w-[384px] w-full mx-auto flex flex-col gap-4 "
            >
              {item.icon}
              <p className=" font-bold font-Atma text-[24px] ">{item.text1}</p>
              <p className=" max-w-[349px] w-full text-[#4E4E4E] font-Metropolis ">
                {item.text2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
