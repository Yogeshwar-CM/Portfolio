import React from "react";
import "./mode.css";

const Mode = ({ toggleTheme, currentTheme }) => {
  const handleToggle = () => {
    toggleTheme();
    document.querySelector(".back").classList.toggle("clicked");
  };

  return (
    <div className={`Mode ${currentTheme === "dark" ? "clicked" : ""}`}>
      <div className="back" onClick={handleToggle}>
        <div className="ball"></div>
      </div>
    </div>
  );
};

export default Mode;
