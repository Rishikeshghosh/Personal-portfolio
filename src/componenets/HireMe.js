import React from "react";
import { CircularText } from "./Icon";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute xs:absolute xs:right-3">
      <div className=" w-48 h-auto flex items-center justify-center relative md:w-24 ">
        <CircularText className="fill-black animate-spin-slow" />
        <Link
          href="rishikeshghoshghosh@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border border-black border-solid border-b-2 w-20 h-20 rounded-full font-semibold
          hover:bg-white hover:text-black md:w-12 md:h-12 md:text-[10px]"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
