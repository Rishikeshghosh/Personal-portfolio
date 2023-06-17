import Layout from "@/componenets/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import rishi from "../../public/images/profile/me.jpg";
import AnimatedText from "@/componenets/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/componenets/Icon";
import HireMe from "@/componenets/HireMe";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Transation from "@/componenets/Transation";
import { useRef } from "react";
import { useRouter } from "next/router";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Transation />
      <main className="flex  items-center w-full min-h-screen lg:flex-col">
        <Layout className="pt-0 md:pt-16 sm:pt-8  ">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className=" xs:mt-[-2rem] xxs:mt-[-2rem]  w-[35%] h-auto md:w-full xs:w-[180%] lg:w-[50%]  ">
              <Image
                src={rishi}
                alt="Rishikesh ghosh"
                className="w-full h-auto rounded-2xl md:inline-block md:w-full xs:mb-5"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw 50vw"
              />
            </div>
            <div className="  w-[60%] xxs:w-[150%] flex flex-col items-center justify-center  lg:w-full lg:text-center   ">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl xxs:!text-lg sm:!text-3xl mb:!text-4xl !text-center xs:!text-2xl !leading-snug xs:flex xs:items-center xs:justify-center "
              />
              <p className="my-10 xxs:px-12 xxs:w-[170%]   xs:my-3 font-medium md:text-sm sm:text-xs   xs:w-[190%]  ">
                As a skilled software developer, I am dedicated to turning ideas
                into innovative web applications. Explore my latest projects and
                articles, showcasing my expertise in React.js and web
                development.
              </p>
              <div
                className="flex xs:flex xs:items-center xs:justify-center items-center justify-center  xs:mt-[-20px] lg:self-center  
                xs:mb-[-45px] 2xl:mb-0 2xl:mt-0
              "
              >
                <Link
                  href="/resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-black text-white p-2.5 px-6 xxs:px-1.5 xxs:py-1.5 rounded-lg text-lg
                  font-semibold hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black md:p-2 md:px-4 md:text-base 
                  xxs:text-sm
                  xs:mt-8 2xl:mt-o 2xl:mb-0  "
                  download={true}
                >
                  Resume <LinkArrow className="2xl:w-6 2xl:ml-1" />
                </Link>
                <CustomLink
                  href="/email"
                  title="Contact "
                  className="ml-4 xs:mb-4 text-lg font-medium capitalize text-black underline md:text-base
                 
                  xxs:text-sm
                   xs:mt-12"
                />
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className=" relative right-[110px] top-[105px]  w-[9%] ">
          <Image src={LightBulb} className="w-full md:hidden" />
        </div>
      </main>
    </>
  );
}
