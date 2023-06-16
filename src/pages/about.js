import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "../componenets/AnimatedText";
import Layout from "../componenets/Layout";
import Image from "next/image";
import rishi from "../../public/images/profile/exuo7itr.png";
import riptu from "../../public/images/profile/rishi.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../componenets/Skills";
import Experience from "../componenets/Experience";
import Education from "@/componenets/Education";
import Transation from "@/componenets/Transation";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 5000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => (
  <>
    <Head>
      <title>Rishikesh | About page</title>
      <meta name="discription" content="any-discription"></meta>
    </Head>
    <Transation />
    <main className="flex   xss:full w-full flex-col items-center justify-center xs:ml-[-17vw] sm:ml-[-5vw] ">
      <Layout className=" 2xl:mt-[70px] xs:pl[20px] xs:w-[100%] pt-16 xs:pt-16 ">
        <AnimatedText
          text="Passion Fuels Purpose! "
          className="mb-16 xs:ml-[1px] lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 xs:flex xs:items-center xs:justify-center xs:pl-[120px] xs:!leading-snug xs:!mb-3  "
        />

        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 xs:order-3 xs:col-span-10 xxs:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-black/75   ">
              About Me
            </h2>
            <p className="font-medium ">
              Hi, I'm Rishikesh Ghsoh, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 2+ years of personal experience in
              programming. I am always looking for new and innovative ways to
              bring my clients' visions to life.
            </p>

            <p className="my-4 font-medium">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>

            <p className="font-medium">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>

          <div
            className="col-span-3 relative w-full h-auto rounded-[1rem] border-2 border-solid border-black bg-white p-10 xs:p-7
          xl:col-span-4 md:col-span-8 xs:order-1  xs:col-span-10 xs:ml-[-2px] xs:mb-12 xxs:col-span-8 "
          >
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-black" />
            <Image
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw 33vw"
              src={riptu}
              alt="Rishikesh"
              className="w-full xs:h-auto h-[100%]  rounded-[10px] "
            />
          </div>

          <div
            className="col-span-2 my-8 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row
          xl:items-center xs:order-3 xs:col-span-10 xxs:col-span-8"
          >
            <div className="flex flex-col   items-end justify-center xl:items-center xs:order-2">
              <span className="inline-block   text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl xxs:text-3xl  ">
                <AnimatedNumber value={16} />+
              </span>
              <h2 className="text-xl   font-medium capitalize text-black/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
                Deployed Projects
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center xl:items-center  ">
              <span className="inline-block    text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl xxs:text-3xl">
                <AnimatedNumber value={30} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-black/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
                Projects completed
              </h2>
            </div>

            <div className="flex flex-col  items-end justify-center xl:items-center">
              <span className="inline-block   text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl xxs:text-3xl">
                <AnimatedNumber value={20} />+
              </span>
              <h2 className="text-xl  font-medium capitalize text-black/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Months of experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </main>
  </>
);

export default about;
