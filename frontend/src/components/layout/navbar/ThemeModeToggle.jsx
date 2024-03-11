import React, { useState } from "react";
import moonIcon from "../../../assets/moon.svg";
import sunIcon from "../../../assets/sun.svg";
const ThemeModeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    document.documentElement.classList.contains("dark")
  );

  function processThemeChange() {
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  }

  function switchTheme() {
    processThemeChange();
  }

  return (
    <div
      className={`${
        isDarkTheme ? "bg-gray-800" : "bg-white/50"
      } flex items-center justify-center h-full`}
    >
      <button
        id="theme-toggle"
        onClick={switchTheme}
        type="button"
        className={`${
          isDarkTheme
            ? "text-gray-300 border-gray-300"
            : "text-gray-800 border-gray-500"
        } border-2 rounded-lg text-sm p-2`}
      >
        <img
          id="theme-toggle-dark-icon"
          src={moonIcon}
          className={`${isDarkTheme ? "hidden" : ""} w-5 h-5`}
        />
        <img
          id="theme-toggle-light-icon"
          className={`${isDarkTheme ? "" : "hidden"} w-5 h-5`}
          src={sunIcon}
        />
      </button>
    </div>
  );
};

export default ThemeModeToggle;
