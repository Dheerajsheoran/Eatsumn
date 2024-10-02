import Image from "next/image";
import React from "react";
import { FacebookIcon, InstagramIcon, Tiktokcon, TwitterIcon } from "./Icon";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-[url(/img/footer-top-img.png)] bg-cover bg-no-repeat max-sm:bg-center ">
      <div className=" max-w-[1232px] w-full mx-auto px-4 pb-10 pt-[200px] ">
        <div className=" flex items-center justify-between gap-5 max-sm:flex-col ">
          <div className=" flex items-center gap-5 ">
            <Link href=""><InstagramIcon /></Link>
            <Link href=""><Tiktokcon /></Link>
            <Link href="">  <TwitterIcon /></Link>
            <Link href=""><FacebookIcon /></Link>
          </div>
          <div className=" flex items-center gap-10 ">
            <Link href="/" className=" opacity-[0.7] text-white font-DMSans ">
              How it’s work
            </Link>
            <Link href="/" className=" opacity-[0.7] text-white font-DMSans ">
              Privacy
            </Link>
            <Link href="/" className=" opacity-[0.7] text-white font-DMSans ">
              Privacy
            </Link>
          </div>
        </div>
        <Link
          href="/"
          className=" pt-8 w-fit  text-white font-DMSans opacity-[0.7] text-center mx-auto flex items-center justify-center "
        >
          © Eatsumn
        </Link>
      </div>
    </div>
  );
};

export default Footer;
