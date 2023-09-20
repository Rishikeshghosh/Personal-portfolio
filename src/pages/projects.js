import React from "react";
import Head from "next/head";
import Layout from "../componenets/Layout";
import AnimatedText from "../componenets/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/componenets/Icon";
import project1 from "../../public/images/projects/chatApp.png";
import project2 from "../../public/images/projects/e-commerceApp.jpg";
import project3 from "../../public/images/projects/chatApp1.png";
import project4 from "../../public/images/projects/chatApp2.png";
import project5 from "../../public/images/projects/e-commerceApp1.jpg";
import project6 from "../../public/images/projects/e-commerceApp2.jpg";
import project7 from "../../public/images/projects/pic1.png";
import project8 from "../../public/images/projects/pic2.png";
import project9 from "../../public/images/projects/pic3.png";

import { motion } from "framer-motion";
import Transation from "@/componenets/Transation";
const FramerMotion = motion(Image);

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full 2xl:bg-slate-50 xxs:bg-white xs:bg-white flex flex-col items-center justify-center rounded-2xl border boder-soloid border-black p-6 relative
    xs:p-4"
    >
      <div
        className="absolute  top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl
      md:-right-2 md-w-[101%] xs:w-[102%] xs:rounded-[1.5rem] "
      />
      <Link
        className="w-full cursor-pointer bg-slate-50 overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerMotion
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw 50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-rose-500 font-medium text-xl lg:text-lg md:text-base  ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>

        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base "
          >
            Visit
          </Link>
          <Link className="w-8 md:w-6" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="xs:ml-[-60px] bg-slate-50 xs:w-[185%] w-full  relative flex items-center justify-center rounded-3xl border border-solid border-black shadow-2xl p-12 rounded-br-2x1
    lg:flex-col lg:p-8 lg:rounded-2xl xs:rounded-br-3xl xs:p-4 "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl
      xs:-right-2  sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"
      />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
        href={link}
        target="_blank"
      >
        <FramerMotion
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw 50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6  ">
        <span className="text-rose-500 font-medium text-xl xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className=" my-2 font-meduim text-black sm:text-sm">{summary}</p>
        <div className=" mt-2 flex items-center ">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base xs:ml-20"
          >
            Visit project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Rishikesh | About page</title>
        <meta name="discription" content="any-discription"></meta>
      </Head>
      <Transation />
      <main className="2xl:w-[100%] 2xl:bg-slate-50 xs:bg-white xxs:bg-white xxs:ml-[-12px] xs:ml-[-12px]  mb-16 xs:mb-10 flex flex-col items-center justify-center ">
        <Layout className="pt-16 xs:pt-0 xxs:pt-0 ">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="xs:mb-9 2xl:mt-[-90px] pb-20 xs:pb-0 xs:mt-16 2xl:mb-7 2xl:ml-10 xs:ml-[5px] lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl xs:flex xs:items-center xs:justify-center  xs:!leading-snug"
          />
          <div
            className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 xs:flex xs:flex-col
          xs:mt-8 "
          >
            <div className="col-span-12 xs:mr-[3px]  ">
              <FeaturedProjects
                title="MERN-CHAT-APP"
                img={project1}
                summary=" A fully functional mern chat apllication with radical and secure authentication with JWT and for live chats i've used socket.io and for database i've used mongodb with node.js and express.js. In this mern chat web application
                you can chat with anyone whether is via single chat or group chat. "
                link="https://zodex-chat-app.onrender.com"
                github="https://github.com/Rishikeshghosh/MERN-CHAT-APP"
                type="Featured projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xs:w-[160%] xs:ml-[-42px]">
              {" "}
              <Project
                title="JWT authentication in login and signup pages"
                img={project3}
                summary="
A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
page transitions, cool background effects, unique design and it is mobile responsive.
"
                link="https://zodex-chat-app.onrender.com"
                github="https://github.com/Rishikeshghosh/MERN-CHAT-APP"
                type="Featured projects"
              />
            </div>

            <div className="col-span-6 sm:col-span-12 xs:w-[160%] xs:ml-[-42px] ">
              {" "}
              <Project
                title="Live chatting with socket.io"
                img={project4}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://zodex-chat-app.onrender.com"
                github="https://github.com/Rishikeshghosh/MERN-CHAT-APP"
                type="Featured projects"
              />
            </div>
            <div className="col-span-12 xs:mr-[3px] bg-slate-50 ">
              {" "}
              <FeaturedProjects
                title="MERN-ECOMMERCE-APP"
                img={project2}
                summary="A fully functional E-commerce website with comprehensive jwt and passport.js authentication along with stripe payment gateway along with nodemailer mail feedback and support
                directly to your given gmail account and it has also other compelling, handy features on this web application"
                link="https://rishikesh.onrender.com"
                github="https://github.com/Rishikeshghosh/MERN-ECOMMERCE"
                type="Featured projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12  xs:col-span-4 xs:w-[160%] xs:ml-[-42px]">
              {" "}
              <Project
                title="Fully Responsive Website In React-Js"
                img={project5}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="https://rishikesh.onrender.com"
                github="https://github.com/Rishikeshghosh/MERN-ECOMMERCE"
                type="Featured projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xs:col-span-4 xs:w-[160%] xs:ml-[-42px] ">
              {" "}
              <Project
                title="Fully functonal cart section "
                img={project6}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://rishikesh.onrender.com"
                github="https://github.com/Rishikeshghosh/MERN-ECOMMERCE"
                type="Featured projects"
              />
            </div>
            <div className="col-span-12 xs:mr-[3px]  ">
              <FeaturedProjects
                title="MERN-SOCIAL-MEDIA-APP"
                img={project7}
                summary="This project is a MERN (MongoDB, Express.js, React, Node.js) based social media application that allows \
                users to connect and share their thoughts, images, and engage in social interactions. "
                link="https://6508183b30d1f54c098a9e15--symphonious-froyo-a0d3b5.netlify.app"
                github="https://github.com/Rishikeshghosh/MERN-SOCIAL-MEDIA-APP"
                type="Featured projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xs:w-[160%] xs:ml-[-42px]">
              {" "}
              <Project
                title="It's well responsive in every device "
                img={project8}
                summary="
A professional portfolio website using React JS, famer-motion, and Styled-components. It has smooth 
page transitions, cool background effects, unique design and it is mobile responsive.
"
                link="https://6508183b30d1f54c098a9e15--symphonious-froyo-a0d3b5.netlify.app"
                github="https://github.com/Rishikeshghosh/MERN-SOCIAL-MEDIA-APP"
                type="Featured projects"
              />
            </div>

            <div className="col-span-6 sm:col-span-12 xs:w-[160%] xs:ml-[-42px] ">
              <Project
                title="JWT authentication in login and signup pages"
                img={project9}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://6508183b30d1f54c098a9e15--symphonious-froyo-a0d3b5.netlify.app"
                github="https://github.com/Rishikeshghosh/MERN-SOCIAL-MEDIA-APP"
                type="Featured projects"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
