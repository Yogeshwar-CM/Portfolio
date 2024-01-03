import React from "react";
import "./Home.css";
import Mode from "../../components/ModeButton/mode";

const Home = ({ toggleTheme, currentTheme }) => {
  return (
    <div className="Home">
      <div className="nav">HOME ABOUT PROJECT ABOUT CONTACT</div>
      <div className="main-grid">
        <div className="item-1 item"></div>
        <div className="item-2 item"></div>
        <div className="item-3 item"></div>
        <div className="item-4 item">
        <Mode toggleTheme={toggleTheme} currentTheme={currentTheme} />
        </div>
        <div className="item-5 item"></div>
        <div className="item-6 item"></div>
        <div className="item-7 item"></div>
        <div className="item-8 item"></div>
        <div className="item-9 item"></div>
      </div>
      <div className="foot"></div>
    </div>
  );
};

export default Home;
