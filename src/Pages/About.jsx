import React from "react";
import "./About.css";
import Alert from "../components/Alert";
import Animated from "./Animated";
import { useNavigate } from "react-router";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import Resume from "../components/Resume";
import { Timeline, Events, Event } from "vertical-timeline-component-react";
import Mode from "../components/Mode";
import Socials from "../components/Socials";

export default function About() {
  const customTheme = {
    borderDotColor: "#ffffff",
    descriptionColor: "#262626",
    dotColor: "#d0cdc4",
    eventColor: "#965500",
    lineColor: "#d0cdc4",
    subtitleColor: "#7c7c7c",
    titleColor: "#405b73",
    yearColor: "#405b73",
  };
  const nav = useNavigate();
  return (
    <>
      <Alert />
      {/* <Menu /> */}
      {/* <i
        className="fa-solid fa-rotate-left cursor-pointer absolute text-xl top-3 right-4 pt-1 pr-2 hidden sm:block"
        onClick={() => {
          nav("/");
        }}
      ></i> */}
      <Animated>
        <div className="About">
          <div className="about-grid">
            <Sidebar />
            <div className="main-abt box font-light">
              <p>
                Hey there! I'm Yogeshwar, a Full Stack Developer proficient in
                MERN (MongoDB, Express, React, Node.js), Python, SQL, AWS EC2,
                Docker, and{" "}
                <span
                  className="cursor-pointer font-bold"
                  onClick={() => {
                    nav("/skills");
                  }}
                >
                  more
                </span>
                . Currently pursuing a B.Tech in Computer Science with a focus
                on Artificial Intelligence and Machine Learning. I enjoy
                creating intuitive user interfaces using Figma and am passionate
                about diving into AI-related topics.
                <br />
                <br />
                Let's connect and discuss how we can collaborate!
              </p>

              <div className="testimonials mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="ml-6">
                    <h4 className="font-bold text-blue-500">
                      Poorna Hari, CoFounder MASTERVANCE
                    </h4>
                    <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
                      I am highly impressed with Yogeshwar's exceptional work
                      ethic and dedication in developing the Mastervance
                      website. He consistently delivered high-quality results
                      within the given timeline, showcasing his strong sense of
                      responsibility. His technical skills are commendable,
                      reflecting a thorough understanding of web development
                      principles. He approached the project with creativity and
                      attention. Overall, Yogeshwar has demonstrated tremendous
                      potential, and I am confident in his future success as a
                      web developer.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="ml-6">
                    <h4 className="font-bold text-blue-500">
                      Chandan, Founder GetMeGig
                    </h4>
                    <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
                      It's been a great pleasure for me working with Yogeshwar.
                      He delivers assigned work on time and supports the client
                      to his full potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="resume box">
              <Resume />
            </div>
            <div className="mode box">
              <Mode />
            </div>
            <div className="socials box">
              <Socials />
            </div>
          </div>
        </div>
      </Animated>
    </>
  );
}
