import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-black text-white
        py-3 px-6 shadow-black cursor-pointer absolute lg:py-2 lg:px-4 md:py-1.5 md:px-3 xs:bg-transparent xs:black:bg-transparent xs:text-black 
        xs:black:text-white xs:font-bold  "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.6 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className=" font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 xs:text-5xl xs:ml-[63px]  ">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center bg-circularLight black:bg-circularDark
        lg:h-[80vh] sm:h-[60vh]  xs:w-[80vw]  
         lg:bg-circularLighting lg:black:bg-circularDarkLg
         md:bg-circularLightMd md:black:bg-circularDarkMd
         sm:bg-circularLightSm sm:black:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-black text-white
        p-8 shadow-black cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2 xs:pt-[10px] "
          whileHover={{ scale: 1.05 }}
        >
          WEB
        </motion.div>
        <Skill name="HTML" x="-28vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="REACT-JS" x="20vw" y="6vw" />
        <Skill name="NODE-JS" x="0vw" y="12vw" />
        <Skill name="WEB-DESIGN" x="-20vw" y="-15vw" />
        <Skill name="TAILWIND" x="15vw" y="-12vw" />
        <Skill name="SASS" x="32vw" y="-5vw" />
        <Skill name="BOOTSTRAP" x="0vw" y="-20vw" />
        <Skill name="MONGODB" x="-25vw" y="18vw" />
        <Skill name="EXPRESS" x="18vw" y="18vw" />
        <Skill name="REDUX" x="10w" y="24vw" />
      </div>
    </>
  );
};

export default Skills;
