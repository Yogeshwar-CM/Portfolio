import React from "react";
import Alert from "../components/Alert";
import Mode from "../components/Mode";
import { useNavigate } from "react-router";
import Menu from "../components/Menu";
import Animated from "./Animated";
import "./Projects.css";

export default function Projects() {
  const nav = useNavigate();
  return (
    <>
      <i
        className="fa-solid fa-rotate-left cursor-pointer absolute text-xl top-3 right-4 pt-1 pr-2 hidden sm:block"
        onClick={() => {
          nav("/");
        }}
      ></i>
      <Alert />
      <Menu />
      <Animated>
        <div className="project-grid">
          <div className="p1 box">P1</div>
          <div className="p2 box">P2</div>
          <div className="p3 box">P3</div>
          <div className="p4 box">P4</div>
          <div className="p5 box">P5</div>
          <div className="p6 box">P6</div>
          <div className="mode box">
            <Mode />
          </div>
        </div>
      </Animated>
    </>
  );
}
