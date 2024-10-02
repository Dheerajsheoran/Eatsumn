import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { sliderimg } from "./common/Helper";
const Sliderpage = () => {
  return (
    <Marquee>
      <div className=" flex gap-[100px] items-center justify-center ml-[100px] ">
        {sliderimg.map((item, index) => (
          <Image
            key={index}
            src={item.img}
            width={150}
            height={48}
            alt="/img/slider-img-1.png"
          />
        ))}
      </div>
    </Marquee>
  );
};

export default Sliderpage;
