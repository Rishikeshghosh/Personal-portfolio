import React from "react";
import { motion, useScroll } from "framer-motion";

const Liicon = ({ refrence }) => {
  const { scrollYProgress } = useScroll({
    target: refrence,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-black">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]  "
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-rose-500 stroke-1 fill-none"
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-white"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className=" animate-pulse stroke-1 fill-red-500 "
        />
      </svg>
    </figure>
  );
};

export default Liicon;
