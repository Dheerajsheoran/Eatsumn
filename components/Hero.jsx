import React from "react";
import FoodPreference from "./FoodPreference";
import Navbar from "./common/Navbar";

const Hero = () => {
  return (
    <div className=" bg-[url(/img/Hero-bg-img.png)] bg-no-repeat bg-contain ">
      <Navbar />
      <div className=" max-w-[1232px] w-full mx-auto px-4 md:pb-6 pb-3">
        <p className=" max-w-[636px] w-full mx-auto text-center font-Atma md:text-[72px] sm:text-[52px] text-[30px] font-bold mb-6 leading-[108%] ">
          Put your diet on <span className=" text-[#EF4D3C] ">Autopilot</span>
        </p>
        <p className=" max-w-[636px] w-full mx-auto text-center md:text-[18px] text-[14px] font-DMSans leading-[150%] md:mb-6 mb-3 ">
          Eat This Much creates personalized meal plans based on your food
          preferences, budget, and schedule. Reach your diet and nutritional
          goals with our calorie calculator, weekly meal plans, grocery lists
          and more.
        </p>

        <button className="border font-Atma mx-auto flex text-white bg-[#EF4D3C] max-w-[149px] text-center items-center justify-center w-full rounded-[30px] py-[14px] px-6 hover:bg-transparent hover:text-[#EF4D3C] duration-300 border-[#EF4D3C]">
          Plan Your Meal
        </button>
      </div>

      <FoodPreference />
    </div>
  );
};

export default Hero;
