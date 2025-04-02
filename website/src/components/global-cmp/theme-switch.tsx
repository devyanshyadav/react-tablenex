"use client";
import React, { useEffect, useState } from "react";
import { LuSunDim } from "react-icons/lu";
import { PiMoonStars } from "react-icons/pi";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button className="cursor-pointer" onClick={toggleTheme}>
      {darkMode ? <LuSunDim /> : <PiMoonStars />}
    </button>
  );
};

export default ThemeSwitch;
