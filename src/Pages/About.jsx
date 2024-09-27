import React from "react";
import "./About.css";
import Alert from "../components/Alert";
import Animated from "./Animated";
import { useNavigate } from "react-router";
import Menu from "../components/Menu";
import Resume from "../components/Resume";
import Mode from "../components/Mode";
import Socials from "../components/Socials";

export default function About() {
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
      <Animated>
        <div className="About">
          <div className="about-grid">
            <div className="main-abt font-light">
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

              <div class="space-y-6 border-l-2 border-dashed mt-16">
                <div class="relative w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="ml-6">
                    <h4 class="font-bold text-blue-500">
                      Freelance Web Developer
                    </h4>
                    <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                      Freelancing Web Development Projects
                    </p>
                    <span class="mt-1 block text-sm font-semibold text-blue-500">
                      Oct 2023 - Present | 10M
                    </span>
                  </div>
                </div>
                <div class="relative w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="ml-6">
                    <h4 class="font-bold text-blue-500">
                      FullStack Lead | Google DSC
                    </h4>
                    <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                      Aliquam tincidunt malesuada tortor vitae iaculis. In eu
                      turpis iaculis, feugiat risus quis, aliquet urna. Quisque
                      fringilla mollis risus, eu pulvinar dolor.
                    </p>
                    <span class="mt-1 block text-sm font-semibold text-blue-500">
                      Sep 2023 - Present | 11M
                    </span>
                  </div>
                </div>
                <div class="relative w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="ml-6">
                    <h4 class="font-bold text-blue-500">
                      FullStack Engineer Intern | Mastervance
                    </h4>
                    <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                      Developed and managed the FullStack Web Application of
                      MASTERVANCE (upcoming EdTech Startup) using MERN Stack AWS
                      and Firebase. This project required collaborating with
                      other members for marketing, SEO, Designing, etc.
                    </p>
                    <span class="mt-1 block text-sm font-semibold text-blue-500">
                      Dec 2023 - Mar 2024 | 3M
                    </span>
                  </div>
                </div>
                <div class="relative w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="ml-6">
                    <h4 class="font-bold text-blue-500">Intern | NULLCLASS</h4>
                    <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                      Built a MERN Stack clone of StackOverflow with certain
                      additional features as challenges in this Course based
                      Internship
                    </p>
                    <span class="mt-1 block text-sm font-semibold text-blue-500">
                      Jun 2023 - Jul 2023 | 2M
                    </span>
                  </div>
                </div>
              </div>
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
