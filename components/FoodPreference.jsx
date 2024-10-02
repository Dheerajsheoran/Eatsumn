// pages/FoodPreference.js
import Image from "next/image";
import { useState } from "react";
import { tabs } from "./common/Helper";
import { CalIcon } from "./common/Icon";

export default function FoodPreference() {
  const [selectedTab, setSelectedTab] = useState("anything");
  const [calories, setCalories] = useState("");
  const [meals, setMeals] = useState("");
  const [school, setSchool] = useState("");
  const [location, setLocation] = useState("");

  const handleTabClick = (tabId) => {
    const selectedTabData = tabs.find((tab) => tab.id === tabId);
    setSelectedTab(tabId);
    setCalories(selectedTabData.caloriePlaceholder);
    setMeals(selectedTabData.mealsPlaceholder);
    setSchool(""); // Reset school and location on tab switch
    setLocation("");
  };

  const selectedTabData = tabs.find((tab) => tab.id === selectedTab);

  return (
    <div className="flex flex-col items-center justify-center p-4 mb-6">
      <div className="bg-white rounded-lg lg:p-10 md:p-8 p-5 w-full max-w-[1232px] mx-auto !lg:h-[577px] shadow-[0px_12px_24px_0px] shadow-[rgba(0,0,0,0.16)] ">
        <h2 className="md:text-[24px] text-[18px] font-Atma font-bold mb-6">
          Choose your food preference
        </h2>

        {/* Navigation Tabs */}
        <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 mb-11 space-x-2  ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex flex-col items-center justify-center !ml-0 p-4 rounded-lg w-full duration-300 ${
                selectedTab === tab.id
                  ? " border-[2px] bg-red-100  border-[#EF4D3C]"
                  : "bg-white border-[2px] border-[#BEBEBE]"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              <span className="text-2xl">
                <Image src={tab.img} width={56} height={56} alt={tab.label} />
              </span>
              <span className="mt-2 font-semibold font-Atma">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Input Fields */}
        <div className="space-y-4 max-md:w-full ">
          {/* Calories and Meals Inputs */}
          <div className="flex items-center justify-between gap-4 space-x-6 mb-4 max-md:flex-col w-full ">
            <div className="w-full mb-2">
              <label className="w-1/3 font-semibold font-Atma">
                I want to eat:
              </label>
              <div className="w-full p-2 border outline-none rounded-lg flex items-center justify-between ">
                <input
                  className="outline-none w-full placeholder:text-black"
                  type="number"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  placeholder={selectedTabData.caloriePlaceholder}
                />
                <div className=" flex items-center gap-4 ">
                  <span className="ml-2 w-fit">Calories</span>
                  <span className="ml-2 w-fit text-[#EF4D3C] flex items-center gap-1 whitespace-nowrap ">
                    <CalIcon /> Not Sure?
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-[265px] !ml-0 mb-2">
              <label className="w-1/3 font-semibold font-Atma"># Meals</label>
              <input
                type="number"
                value={meals}
                onChange={(e) => setMeals(e.target.value)}
                placeholder={selectedTabData.mealsPlaceholder}
                className="w-full p-2 border outline-none rounded-lg placeholder:text-black"
              />
            </div>
          </div>

          {/* School and Location Dropdowns */}
          <div className="flex items-center justify-between gap-4 space-x-6 max-md:flex-col w-full ">
            {/* School Dropdown */}
            <div className="w-full mb-2 ">
              <label className="w-1/3 font-semibold font-Atma">
                Select your school:
              </label>
              <select
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                className="w-full p-2 border rounded-lg outline-none "
              >
                <option value="">Select your school</option>
                {selectedTabData.schools.map((schoolOption) => (
                  <option key={schoolOption} value={schoolOption}>
                    {schoolOption}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Dropdown */}
            <div className="w-full mb-2 !ml-0">
              <label className="w-1/3 font-semibold font-Atma">Location:</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border rounded-lg outline-none"
              >
                <option value="">Select location</option>
                {selectedTabData.locations.map((locationOption) => (
                  <option key={locationOption} value={locationOption}>
                    {locationOption}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:mt-11 sm:mt-8 mt-5">
          <button className="border font-Atma text-white bg-[#EF4D3C] max-w-[172px] items-center justify-center flex mx-auto w-full rounded-[30px] py-[14px] px-6 hover:bg-transparent hover:text-[#EF4D3C] duration-300 border-[#EF4D3C]">
            Genarate Meals
          </button>
        </div>
      </div>
    </div>
  );
}
