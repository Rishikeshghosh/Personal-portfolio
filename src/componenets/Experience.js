import React from "react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Liicon from "./Liicon";

const Deatils = ({ postion, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%]  mx-auto flex flex-col items-center justify-between md:w-[80%] xs:w-[120%] 
     
      "
    >
      <Liicon refrence={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg   ">
          {postion}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-red-500 capitalize "
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-black/75 xs:text-sm ">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm xs:w-[120%]">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 xs:!mt-40 xs:mb-[-120px] ">
      <h2 className=" font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl  md:mb-16 xs:ml-[43px]">
        Experience
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative  lg:w-[90%] md:w-full xs:w-[100%]"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-0 w-[4px] h-full bg-black origin-top
          md:w-[2px] md:left-[30px] xs:left-[19px] "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-12 ">
          <Deatils
            postion="Software Engineer"
            companyLink=""
            company=""
            time="2021-Present "
            address="Assam"
            work="As a self taught and newbie programmer i have not worked in a broader scale with professionals as of yet. However i quite firmly belive that 
            i have that radical as well as well organized and positive mindset, my own expriences and most crucially my comprehensive coding skills that i have developed over the years."
          />

          <Deatils
            postion="UX/UI Designer"
            companyLink="www.google.com"
            company=""
            time="2021-Present "
            address="Assam"
            work="As a programmer i tend strive to make the desighn along with user interface ever so riveting and well organized for the potientail users of mine
            . And also i prefer to bring something groundbraking things in my projects via coding and my creativity for new alteration in my projects that perhaps has never been actualized before
            "
          />

          <Deatils
            postion="Full stack Developer"
            companyLink="www.google.com"
            company=""
            time="2021-Present "
            address="Assam"
            work="As a programmer i have worked in backend as well as frontend, and i have made plenty of projects such as, realtime chat application, full functional E-commerce website, video stremming platfrom and many more
            and while i was making those big projects i learnt bunch of requisite things of backend as well as fronted."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
