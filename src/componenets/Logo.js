import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  const MotionLink = motion(Link);
  return (
    <div className="flex xs:absolute xs:right-[-52px]  item-center justify-center mt-2   ">
      <MotionLink
        href="/"
        className="xs:w-14 xxs:w-11 xxs:h-11  xs:h-14 w-20 h-20 bg-black text-white flex items-center justify-center rounded-full xs:text-lg text-2xl font-bold "
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        RG
      </MotionLink>
    </div>
  );
};

export default Logo;
