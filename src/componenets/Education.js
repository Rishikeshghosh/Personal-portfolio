import React from "react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Liicon from "./Liicon";

const Deatils = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] xs:ml-11 mx-auto flex flex-col items-center justify-between "
    >
      <Liicon refrence={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg xs:w-[200%]">
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium text-black/75 xs:text-sm ">
          {time} | {place}
        </span>
        <p className="font-medium w-full xs:w-[200%]">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="xs:mt-[190px] my-64 ">
      <h2 className=" font-bold text-8xl mb-32 w-full text-center xs:text-4xl xs:mb-16 xs:ml-[55px]">
        Education
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative  md:w-[80%]  xs:w-[100%]"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full  flex flex-col items-start justify-between ml-4 xs:m-2 xs:ml-3  ">
          <Deatils
            type="Bachelor Of Commerce (Honours) "
            time="2021-2023"
            place="Assam Central University"
            info="Business, Accounting, Developing Problem Solving Plans, ideas, Communication Skills, Mathmatics"
          />

          <Deatils
            type="Online Coursework"
            time="2022-2023"
            place="Coursera And EDX"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and UX/UI desighning to make 
Great Projects With Great User Interface."
          />

          <Deatils
            type="Self Taught Programmer"
            time="2021-present"
            place="Assam"
            info="I have Learnt bunch of technologies over the years all by myself as a self taught programmer such as, HTML-5 Css-3 Sass, Javascript, Tailwind, Bootstap, React-js, Redux, Next-js, Web desighn, Node-js Express, Mongodb. "
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
