import React, { useState } from "react";
import profile from "../assets/profile.jpeg";
import reactdark from "../assets/reactjsdark.svg";
import awsdark from "../assets/awsdark.svg";
import awsec2dark from "../assets/awsec2dark.svg";
import bootstrapdark from "../assets/bootstrapdark.svg";
import cppdark from "../assets/cppdark.svg";
import cssdark from "../assets/cssdark.svg";
import djangodark from "../assets/djangodark.svg";
import dockerdark from "../assets/dockerdark.svg";
import electrondark from "../assets/electrondark.svg";
import figmadark from "../assets/figmadark.svg";
import firebasedark from "../assets/firebasedark.svg";
import gitdark from "../assets/gitdark.svg";
import githubdark from "../assets/githubdark.svg";
import herokudark from "../assets/herokudark.svg";
import htmldark from "../assets/htmldark.svg";
import jsdark from "../assets/jsdark.svg";
import mongodbdark from "../assets/mongodbdark.svg";
import muidark from "../assets/muidark.svg";
import mysqldark from "../assets/mysqldark.svg";
import netlifydark from "../assets/netlifydark.svg";
import nodejsdark from "../assets/nodejsdark.svg";
import npmdark from "../assets/npmdark.svg";
import phpdark from "../assets/phpdark.svg";
import postmandark from "../assets/postmandark.svg";
import pythondark from "../assets/pythondark.svg";
import reduxdark from "../assets/reduxdark.svg";
import tailwinddark from "../assets/tailwinddark.svg";
import vitedark from "../assets/vitedark.svg";

import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const [rc, setRc] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  function toggleLightMode() {
    document.body.classList.toggle("light-mode");
  }

  const bellClicked = () => {
    setRc(true);
    setPopoverOpen(true);
  };

  const closePopover = () => {
    setPopoverOpen(false);
  };

  return (
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
                experience. Let's explore my portfolio together and unleash its
                full potential!
              </div>
            </div>
          </div>
          <i
            className="fa-solid fa-times close-button"
            onClick={closePopover}
          ></i>
        </div>
      </div>
      <i
        className="fa-solid fa-bars-staggered"
        id="menu"
        onClick={toggleLightMode}
      ></i>
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
          <i className="fa-solid fa-paper-plane"></i>
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
        <div className="switch">
          <input type="checkbox" className="switch__input" id="Switch" />
          <label className="switch__label" htmlFor="Switch">
            <span className="switch__indicator"></span>
            <span className="switch__decoration"></span>
          </label>
        </div>
      </div>
      <div className="skills">
        <div className="scrollArea">
          <div class="scroll">
            <div class="m-scroll">
              <span>
                <img src={reactdark} />
              </span>
              <span>
                <img src={awsdark} />
              </span>
              <span>
                <img src={awsec2dark} />
              </span>
              <span>
                <img src={bootstrapdark} />
              </span>
              <span>
                <img src={cssdark} />
              </span>
              <span>
                <img src={cppdark} />
              </span>
              <span>
                <img src={djangodark} />
              </span>
              <span>
                <img src={dockerdark} />
              </span>
              <span>
                <img src={electrondark} />
              </span>
              <span>
                <img src={tailwinddark} />
              </span>
              <span>
                <img src={djangodark} />
              </span>
              <span>
                <img src={figmadark} />
              </span>
              <span>
                <img src={htmldark} />
              </span>
              <span>
                <img src={gitdark} />
              </span>
            </div>
          </div>
          <div class="scroll">
            <div class="l-scroll">
              <span>
                <img src={jsdark} />
              </span>
              <span>
                <img src={herokudark} />
              </span>
              <span>
                <img src={mongodbdark} />
              </span>
              <span>
                <img src={githubdark} />
              </span>
              <span>
                <img src={firebasedark} />
              </span>
              <span>
                <img src={muidark} />
              </span>
              <span>
                <img src={mysqldark} />
              </span>
              <span>
                <img src={netlifydark} />
              </span>
              <span>
                <img src={nodejsdark} />
              </span>
              <span>
                <img src={npmdark} />
              </span>
              <span>
                <img src={postmandark} />
              </span>
              <span>
                <img src={phpdark} />
              </span>
              <span>
                <img src={pythondark} />
              </span>
              <span>
                <img src={reduxdark} />
              </span>
              <span>
                <img src={vitedark} />
              </span>
            </div>
          </div>
        </div>
        <div className="skills-btn">
          <i className="fa-solid fa-arrow-right" id="skills-btn"></i>
          Explore all skills
        </div>
      </div>
      <div className="resume">RESUME</div>
      <div className="projects">
        <h1 className="proj-title">PROJECTS</h1>
        <span className="proj-btn">
          <i className="fa-solid fa-arrow-right" id="proj-btn"></i>
        </span>
      </div>
      <div className="contact">
        <div className="contact-l">
          <div className="main-c">Need a Website?</div>
          <p className="contact-c">
            I accept freelance jobs, collaborations with startups / brands.
          </p>
        </div>
        <div className="contact-btn">
          <i className="fa-solid fa-arrow-right" id="contact-btn"></i>
          Let's Talk
        </div>
      </div>
    </div>
  );
};

export default Home;
