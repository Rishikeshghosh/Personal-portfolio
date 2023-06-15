import { document } from "postcss";
import React, { useEffect, useRef, useState } from "react";

const UseThemeSwitcher = () => {
  const preferDarkQuary = "(prefer-color-scheme : black)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuary = window.matchMedia(preferDarkQuary);
    const userPrefence = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPrefence) {
        let check = userPrefence === "black" ? "black" : "white";
        setMode(check);
        if (check === "black") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuary.matches ? "black" : "white";
        setMode(check);

        if (check === "black") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuary.addEventListener("change", handleChange);

    return () => mediaQuary.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "black") {
      window.localStorage.setItem("theme", "black");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "white");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default UseThemeSwitcher;
