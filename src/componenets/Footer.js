import React from "react";
import Layout from "./Layout";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center  xs:pl-0 border-t-2 border-solid border-black font-medium text-lg sm:text-base ">
      <Layout className=" sm:flex sm:items-center sm:justify-center flex items-center justify-center flex-col  py-8    md:flex md:items-center md:justify-center lg:flex-col lg:py-6 lg:flex lg:items-center lg:justify-center  xs:p-2 xs:py-5 xs:flex xs:items-center">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center lg:py-2">
          Build with
          <span className=" text-rose-800 text-2xl px-1 ">&#9825;</span>
          by &nbsp;
          <Link
            href="https://twitter.com/RishikeshGhos10"
            className="underline underline-offset-2"
            target="_blank"
          >
            Rishikesh
          </Link>
        </div>
        <Link
          href="https://twitter.com/RishikeshGhos10"
          className="underline underline-offset-2"
          target={"_blank"}
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};
