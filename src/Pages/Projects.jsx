import React from "react";
import Alert from "../components/Alert";
import Mode from "../components/Mode";
import SO from "../assets/SO.png";
import GMG from "../assets/GMG.png";
import SWOOK from "../assets/SWOOK.png";
import P from "../assets/P.png";
import Resume from "../components/Resume";
import M from "../assets/M.png";
import BA from "../assets/BA.png";
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
        <div className="projects-container">
          <div className="projects-list">
            <div className="box project-item">
              <img src={M} alt="" className="cursor-pointer" />
              <div className="proj-det flex-column p-4">
                <h1 className="font-bold">MASTERVANCE</h1>
                <p className="font-light mt-4">
                  Mastervance Wesbite Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Nesciunt, nemo!
                </p>
                <div className="proj-btns flex justify-between items-center mt-10">
                  <i className="fa-brands text-3xl fa-github"></i>
                  <span class="font-extralight text-gray-200 cursor-pointer rounded pl-2 pr-2 pt-1 pb-1 hover:bg-gray-200 hover:text-gray-900 font-normal transition duration-200">
                    DEMO
                  </span>
                </div>
              </div>
            </div>
            <div className="box project-item">
              <img src={GMG} alt="" />
              <div className="proj-det flex-column p-4">
                <h1 className="font-bold">GetMeGrade</h1>
                <p className="font-light mt-4">
                  GetMeGrade Wesbite Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Nesciunt, nemo!
                </p>
                <div className="proj-btns flex justify-between items-center mt-10">
                  <i className="fa-brands text-3xl fa-github"></i>
                  <span class="font-extralight text-gray-200 cursor-pointer rounded pl-2 pr-2 pt-1 pb-1 hover:bg-gray-200 hover:text-gray-900 font-normal transition duration-200">
                    DEMO
                  </span>
                </div>
              </div>
            </div>
            <div className="box project-item">
              <img src={P} alt="" />
              <div className="proj-det flex-column p-4">
                <h1 className="font-bold">PORTFOLIO</h1>
                <p className="font-light mt-4">
                  Get Me Grade Wesbite Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Nesciunt, nemo!
                </p>
                <div className="proj-btns flex justify-between items-center mt-10">
                  <i className="fa-brands text-3xl fa-github"></i>
                  <span class="font-extralight text-gray-200 cursor-pointer rounded pl-2 pr-2 pt-1 pb-1 hover:bg-gray-200 hover:text-gray-900 font-normal transition duration-200">
                    DEMO
                  </span>
                </div>
              </div>
            </div>
            <div className="box project-item">
              <img src={SWOOK} alt="" />
              <div className="proj-det flex-column p-4">
                <h1 className="font-bold">BOOK SWAPPING PLATFORM</h1>
                <p className="font-light mt-4">
                  SWOOK Wesbite Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Nesciunt, nemo!
                </p>
                <div className="proj-btns flex justify-between items-center mt-10">
                  <i className="fa-brands text-3xl fa-github"></i>
                  <span class="font-extralight text-gray-200 cursor-pointer rounded pl-2 pr-2 pt-1 pb-1 hover:bg-gray-200 hover:text-gray-900 font-normal transition duration-200">
                    DEMO
                  </span>
                </div>
              </div>
            </div>
            <div className="box project-item">
              <img src={BA} alt="" />
              <div className="proj-det flex-column p-4">
                <h1 className="font-bold">BLOG APP</h1>
                <p className="font-light mt-4">
                  Simple blog app Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Nesciunt, nemo!
                </p>
                <div className="proj-btns flex justify-between items-center mt-10">
                  <i className="fa-brands text-3xl fa-github"></i>
                  <span class="font-extralight text-gray-200 cursor-pointer rounded pl-2 pr-2 pt-1 pb-1 hover:bg-gray-200 hover:text-gray-900 font-normal transition duration-200">
                    DEMO
                  </span>
                </div>
              </div>
            </div>
            <div className="box project-item">
              <img src={SO} alt="" />
              <div className="proj-det flex-column p-4">
                <h1 className="font-bold">STACK OVERFLOW CLONE</h1>
                <p className="font-light mt-4">
                  Stack Overflow Clone Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Nesciunt, nemo!
                </p>
                <div className="proj-btns flex justify-between items-center mt-10">
                  <i className="fa-brands text-3xl fa-github"></i>
                  <span class="font-extralight text-gray-200 cursor-pointer rounded pl-2 pr-2 pt-1 pb-1 hover:bg-gray-200 hover:text-gray-900 font-normal transition duration-200">
                    DEMO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Animated>
      <div className="side">
        <div className="resume box">
          <Resume />
        </div>
        <div className="box pss"></div>
        <div className="mode-sidebar box">
          <Mode />
        </div>
      </div>
    </>
  );
}
