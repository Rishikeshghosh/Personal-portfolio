import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, className = "" }) => {
  const qoute = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const singleWord = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center text-center 
      
      
    sm:py-0 xs:w-[130%]  xs:pr-9 "
    >
      <motion.h1
        className={` inline-block w-full text-black  font-bold capitalize text-8xl  xs:ml-[-20px] xs:flex-wrap
        ${className}`}
        variants={qoute}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              key={index}
              className="inline-block"
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
