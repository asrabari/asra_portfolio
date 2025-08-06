import React, { useState } from "react";
import "./ThemeToggle.css";
import sunIcon from "../../assets/lightSun.png";
import moonIcon from "../../assets/darkMoon.png";

const ThemeToggle = () => {
  const [creamMode, setCreamMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("cream-mode");
    setCreamMode(!creamMode);
  };

  return (
    <button onClick={toggleTheme} className="themeToggleBtn">
      <img
        src={creamMode ? moonIcon : sunIcon}
        alt="Toggle Theme"
        className="themeIcon"
      />
    </button>
  );
};

export default ThemeToggle;
