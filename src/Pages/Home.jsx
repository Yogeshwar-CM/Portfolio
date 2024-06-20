import React, { useState } from "react";
import profile from "../assets/profile.jpeg";
import "./Home.css";
import { Link } from "react-router-dom";

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
      <div className="mode">MODE</div>
      <div className="skills">SKILLS</div>
      <div className="resume">RESUME</div>
      <div className="projects">
        <h1 className="proj-title">PROJECTS</h1>
        <span className="proj-btn">
          <i className="fa-solid fa-arrow-right" id="proj-btn"></i>
        </span>
      </div>
      <div className="contact">
        <div className="">
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
