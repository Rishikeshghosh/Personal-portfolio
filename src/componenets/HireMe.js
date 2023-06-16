import React from "react";
import { CircularText } from "./Icon";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="absolute  left-[55px] bottom-[25px] right-[-1000px] top-[-130px] flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute xs:absolute xs:right-3">
      <div className=" xxs:w-[80px] xxs:h-auto w-52 h-auto flex items-center justify-center relative md:w-24 ">
        <CircularText className="fill-black animate-spin-slow " />
        <Link
          href="rishikeshghoshghosh@gmail.com"
          className="flex xxs:w-10 xxs:h-10 items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border border-black border-solid border-b-2 w-20 h-20 rounded-full font-semibold
          hover:bg-white hover:text-black md:w-12 md:h-12 md:text-[10px] xxs:text-[8px] "
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
