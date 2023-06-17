import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/componenets/Layout";
import AnimatedText from "@/componenets/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import article6 from "../../public/images/articles/What is higher order component in React.jpg";
import article7 from "../../public/images/articles/What is Redux with easy explanation.png";
import { motion, useMotionValue } from "framer-motion";
import tweet from "../../public/images/profile/tweet.jpg";
import tweet1 from "../../public/images/profile/tweet3.jpg";
import tweet2 from "../../public/images/profile/tweet4.jpg";
import tweet3 from "../../public/images/profile/tweet5.jpg";
import tweet4 from "../../public/images/profile/tweet6.jpg";
import tweet5 from "../../public/images/profile/tweet7.jpg";
import tweet6 from "../../public/images/profile/tweet8.jpg";
import tweet7 from "../../public/images/profile/tweet9.jpg";
import tweet8 from "../../public/images/profile/tweet10.jpg";
import Transation from "@/componenets/Transation";
const FramerMotion = motion(Image);

const MovingImage = ({ title, img, link }) => {
  return (
    <Link href={link} target="_blank">
      <Image src={img} alt="rishi" className="  "></Image>
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="realitive w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-white text-black first:mt-0 border border-solid border-black border-r-4 border-b-4
      sm:flex-col   "
    >
      <MovingImage img={img} alt="rishi" link={link} />
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <div className=" relative col-span-1 w-full p-4 bg-white border brder-solid border-black rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl" />

      <Link
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerMotion
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <Link href={link} target="_blank"></Link>
      <h2 className=" capitalize mt-4 text-2xl font-bold my-2 hover:underline xs:text-lg ">
        {title}
      </h2>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-rose-500 font-semibold">{time}</span>
    </div>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Rishikesh | Article page</title>
        <meta name="discription" content="any-discription"></meta>
      </Head>
      <Transation />
      <main className="  xs:ml-[-60px]  w-full mb-16 xs:mb-10  flex flex-col items-center justify-center ">
        <Layout className="  xxs:pt-0 xs:pt-0">
          <AnimatedText
            text="Everything Imposible Possible! "
            className="mb-16 2xl:mt-[-90px] xs:mb-5 xs:mt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl xs:flex xs:items-center xs:justify-center  xs:!leading-snug
           xs:ml-[120px] xs:!break-words [&>*:nth-child(2)]:line-through"
          />
          <ul
            className="grid grid-cols-2 gap-16  lg:gap-8 md:grid-cols-1 md:gap-y-16
          xs:w-[168%] "
          >
            <li>
              <FeaturedArticle
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="/"
                img={article1}
                alt="rishikwaj"
              />
            </li>
            <li>
              <FeaturedArticle
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="/"
                img={article2}
                alt="rishikwaj"
              />
            </li>
          </ul>
          <h2
            className=" font-bold text-4xl w-full text-center my-16 mt-32
          xs:ml-[59px] xs:leading-snug"
          >
            Best Qoutes
          </h2>
          <ul className="xs:w-[172%]">
            <Article
              title="Even if we don't have the power to choose where we come from, we can still choose where we go from there."
              img={tweet}
              alt="rishikwaj"
              date="— Stephen Chbosky"
              link="/"
            />
            <Article
              title="Things usually work out in the end. What if they don't? That just means you haven't come to the end yet."
              img={tweet1}
              date="— ​Jeanette Walls"
              link="/"
            />
            <Article
              title="Don't cry because it's over. Smile because it happened."
              img={tweet2}
              alt="rishikwaj"
              date="— Dr. Seuss"
              link="/"
            />
            <Article
              title="Anyone who has never made a mistake has never tried anything new."
              alt="rishikwaj"
              img={tweet3}
              date="— Albert Einstein"
              link="/"
            />
            <Article
              title="All that is gold does not glitter, not all those who wander are lost; the old that is strong. Does not wither, deep roots are not reached by the frost."
              img={tweet4}
              alt="rishikwaj"
              date="— ​J.R.R. Tolkien"
              link="/"
            />
            <Article
              title="Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great."
              img={tweet5}
              alt="rishikwaj"
              date="— Mark Twain"
              link="/"
            />
            <Article
              title="No matter what the day brings and no matter how hard life hits you, if you can breathe, smile and keep moving on! Once you have life, know that God is alive!"
              img={tweet6}
              alt="rishikwaj"
              date="― Ernest Agyemang Yeboah"
              link="/"
            />
            <Article
              title="No matter what the day brings and no matter how hard life hits you, if you can breathe, smile and keep moving on! Once you have life, know that God is alive!"
              img={tweet7}
              alt="rishikwaj"
              date="― Ernest Agyemang Yeboah"
              link="/"
            />
            <Article
              title="No matter what the day brings and no matter how hard life hits you, if you can breathe, smile and keep moving on! Once you have life, know that God is alive!"
              img={tweet8}
              alt="rishikwaj"
              date="― Ernest Agyemang Yeboah"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
