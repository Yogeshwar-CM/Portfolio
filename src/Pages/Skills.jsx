import React from "react";
import Mode from "../components/Mode";
import Menu from "../components/Menu";
import Alert from "../components/Alert";
import { useNavigate } from "react-router";
import AnimatedPage from "./Animated";
import "./Skills.css";
import Resume from "../components/Resume";

export default function Skills() {
  const nav = useNavigate();
  return (
    <>
      <Alert />
      <Menu />
      <i
        className="fa-solid fa-rotate-left cursor-pointer absolute text-xl top-3 right-4 pt-1 pr-2 hidden sm:block"
        onClick={() => {
          nav("/");
        }}
      ></i>
      <AnimatedPage>
        <div className="skills-grid">
          <div className="mode box">
            <Mode />
          </div>
          <div className="resume box">
            <Resume />
          </div>
          <div className="frontend box"></div>
          <div className="box backend"></div>
          <div className="box other"></div>
        </div>
      </AnimatedPage>
    </>
  );
}
