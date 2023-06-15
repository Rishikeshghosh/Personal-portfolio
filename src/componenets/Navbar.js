import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwiterIcon,
} from "./Icon";
import { motion } from "framer-motion";
import UseThemeSwitcher from "./hook/UseThemeSwitcher";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mode, setmode] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
      <Link href={href} className={`${className} relative group `}>
        {title}

        <span
          className={`h-[3px] inline-block  bg-black absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-450 ${
          router.asPath === href ? "w-full" : "w-0"
        } `}
        >
          &nbsp;
        </span>
      </Link>
    );
  };

  const CustomMoblieLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
      toggle();
      router.push(href);
    };

    return (
      <button
        href={href}
        className={`${className} relative group text-white my-2 `}
        onClick={handleClick}
      >
        {title}

        <span
          className={`h-[3px] inline-block  bg-white absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-450 ${
          router.asPath === href ? "w-full" : "w-0"
        } `}
        >
          &nbsp;
        </span>
      </button>
    );
  };
  /* w-full px-32 py-8 font-bold flex item-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8
   */

  return (
    <header className="w-full px-32 xs:ml-[-6px] py-8 font-bold flex item-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8 ">
      <button
        onClick={handleClick}
        className="flex-col justify-center hidden items-center lg:flex xs:absolute xs:left-8   "
      >
        <span
          className={`bg-black  dark:bg-white block translate-all duration-300 ease-in-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            open ? "rotate-45 translate-y-[10px]" : "-translate-y-0.5   "
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white block translate-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
            open ? "opacity-0" : "opacity-100   "
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white block translate-all duration-300 ease-in-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            open ? "-rotate-45 -translate-y-1" : "translate-y-0.5 "
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/RishikeshGhos10"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 mx-3"
          >
            <TwiterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/Rishikeshghosh"
            target={"_blank"}
            className="w-7 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href=""
            target={"_blank"}
            className="w-7 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rishikesh-ghosh-9a226a230/"
            target={"_blank"}
            className="w-7 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <DribbbleIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rishikesh-ghosh-9a226a230/"
            target={"_blank"}
            className="w-7 ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <PinterestIcon />
          </motion.a>
        </nav>
      </div>

      {open ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[90vw]  flex flex-col justify-between  z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 rounded-lg backdrop-blur-md py-32 
         "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMoblieLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMoblieLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMoblieLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMoblieLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://twitter.com/RishikeshGhos10"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-7 mx-3 sm:mx-1"
            >
              <TwiterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/Rishikeshghosh"
              target={"_blank"}
              className="w-7 mx-3 bg-white rounded-full sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rishikesh-ghosh-9a226a230/"
              target={"_blank"}
              className="w-7 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rishikesh-ghosh-9a226a230/"
              target={"_blank"}
              className="w-7 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <DribbbleIcon />
            </motion.a>
            <motion.a
              href="https://github.com/Rishikeshghosh"
              target={"_blank"}
              className="w-7 ml-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <PinterestIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-75%] xs:left-[53%]">
        <Logo className="" />
      </div>
    </header>
  );
};

export default Navbar;
