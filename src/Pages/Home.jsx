import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpeg";
import { motion } from "framer-motion";
import "./Home.css";
import AnimatedPage from "./Animated";
import Mode from "../components/Mode";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Form from "../components/Form";
import Projects from "../components/Projects";

const Home = () => {
  const [rc, setRc] = useState(false);
  const navigate = useNavigate();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const bellClicked = () => {
    setRc(true);
    setPopoverOpen(true);
  };

  const closePopover = () => {
    setPopoverOpen(false);
  };

  return (
    <AnimatedPage>
      <div className="Home">
        <div className={popoverOpen ? "popover popover-t" : "popover"}>
          <div
            className="bg-blue-100 flex border border-blue-200 text-gray-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-white"
            role="alert"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="flex-shrink-0 size-4 mt-1 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <div className="ms-3">
                <h3 className="font-semibold">Get the Best View on Desktop!</h3>
                <div className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Psst! Make sure you're on your desktop or laptop for the full
                  experience. Let's explore my portfolio together and unleash
                  its full potential!
                </div>
              </div>
            </div>
            <i
              className="fa-solid fa-times close-button"
              onClick={closePopover}
            ></i>
          </div>
        </div>
        <i className="fa-solid fa-bars-staggered" id="menu"></i>
        <i className="fa-regular fa-bell" id="bell" onClick={bellClicked}></i>
        <div className={rc ? "redc redcc" : "redc"}></div>
        <div className="sidebar">
          <span>
            <i className="fa-solid fa-bars-staggered"></i>
          </span>
          <span>
            <i className="fa-solid fa-house"></i>
            <i className="fa-solid fa-file"></i>
            <i className="fa-solid fa-gears"></i>
            <i
              className="fa-solid fa-paper-plane"
              onClick={() => {
                navigate("/contact");
              }}
            ></i>
          </span>
          <div className="span">
            <i className="fa-solid fa-circle-info"></i>
          </div>
        </div>
        <div className="about">
          <div className="hey">
            Hello There, I am <span className="name">Yogeshwar</span>
            <br /> FullStack Developer and Designer
          </div>
          <div className="about-btn">
            <i className="fa-solid fa-arrow-right" id="abt-btn"></i>
            About Me
          </div>
        </div>
        <div className="profile">
          <img src={profile} alt="profile picture" className="profile-pic" />
        </div>
        <div className="mode">
          <Mode />
        </div>
        <div className="skills">
          <Skills />
        </div>
        <div className="resume">
          <Resume />
        </div>
        <div className="projects">
          <Projects />
        </div>

        <div className="contact">
          <Form />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
