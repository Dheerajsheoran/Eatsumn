import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="bg-[#FFEFED] pb-[85px] ">
        <div className="max-w-[1232px] mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <Image
              src="/img/navlogo.png"
              width={181}
              height={48}
              alt="navlogo.png"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <Link
                className=" hover:underline font-DMSans duration-300"
                href="/"
              >
                How it’s Work
              </Link>
            </li>

            <li>
              <button className="border font-Atma text-white bg-[#EF4D3C] max-w-[130px] w-full rounded-[30px] py-[14px] px-6 hover:bg-transparent hover:text-[#EF4D3C] duration-300 border-[#EF4D3C] ">
                Meal Planer
              </button>
            </li>
          </ul>

          {/* Hamburger Icon for Mobile */}
          <div className="block md:hidden " onClick={handleNav}>
            <AiOutlineMenu size={30} />
          </div>
        </div>

        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out md:hidden ${
            nav
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={handleNav}
        ></div>

        {/* Mobile Sidebar (Bottom to Top) */}
        <div
          className={`fixed bottom-0 left-0 w-full md:w-[70%] h-[100%] bg-blue-800 text-white transform transition-transform duration-300 ease-in-out z-40 p-4 md:hidden ${
            nav ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button
            onClick={handleNav}
            className=" max-w-[40px] w-full ml-auto flex "
          >
            <AiOutlineClose size={30} />
          </button>
          <ul className="p-6 space-y-6 flex flex-col items-center">
            {/* Close Button */}
            <li>
              <Link
                className=" hover:underline font-DMSans duration-300 mx-auto text-center"
                href="/"
              >
                How it’s Work
              </Link>
            </li>

            <li>
              <button className="border font-Atma text-white bg-[#EF4D3C] max-w-[130px] w-full rounded-[30px] py-[14px] px-6 hover:bg-transparent hover:text-[#EF4D3C] duration-300 border-[#EF4D3C] ">
                Meal Planer
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
