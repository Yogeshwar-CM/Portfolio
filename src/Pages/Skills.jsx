import React from "react";
import Mode from "../components/Mode";
import Menu from "../components/Menu";
import Alert from "../components/Alert";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import AnimatedPage from "./Animated";
import "./Skills.css";
import Resume from "../components/Resume";

import rjs from "../assets/reactjs.svg";
import awsec2 from "../assets/awsec2.svg";
import aws from "../assets/aws.svg";
import firebase from "../assets/firebase.svg";
import bootstrap from "../assets/bootstrap.svg";
import mongodb from "../assets/js.svg";
import css from "../assets/css.svg";
import django from "../assets/django.svg";
import docker from "../assets/docker.svg";
import js from "../assets/js.svg";
import postman from "../assets/postman.svg";
import nodejs from "../assets/nodejs.svg";

export default function Skills() {
  const nav = useNavigate();
  return (
    <>
      <Alert />
      <AnimatedPage>
        <div className="skills-grid">
          <Sidebar />
          <div className="mode box">
            <Mode />
          </div>
          <div className="resume box">
            <Resume />
          </div>
          <div className="frontend box">
            <h1>DEVELOPMENT & FRAMEWORKS</h1>
            <div className="icons">
              <div className="tech flex">
                <img src={nodejs} alt="JS" />
                <p>NodeJS</p>
              </div>
              <div className="tech flex">
                <img src={rjs} alt="JS" />
                <p>ReactJS</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>ExpressJS</p>
              </div>
              <div className="tech flex">
                <img src={mongodb} alt="JS" />
                <p>MongoDB</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>React Native</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>MySQL</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>HTML5</p>
              </div>
              <div className="tech flex">
                <img src={css} alt="JS" />
                <p>CSS</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>TailwindCSS</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>ShadeCN UI</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Vercel</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Render</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Netlify</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>SocketIO</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>RestAPI</p>
              </div>
              <div className="tech flex">
                <img src={firebase} alt="JS" />
                <p>FireBase</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Framer Motion</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Postman</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Bootstrap</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Redux</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Vite</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>JavaScript</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Flask</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Django</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>AWS (EC2, S3)</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>ElectronJS</p>
              </div>
            </div>
          </div>
          <div className="box other">
            <h1>OTHER</h1>
            <div className="icons">
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Figma</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Canva</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>UI Design</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Communication Skills</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Teamwork</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Leadership</p>
              </div>
            </div>
          </div>
          <div className="box backend">
            <h1>GENERAL</h1>
            <div className="icons">
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Python</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Data Science & Analytics</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Deep Learning</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>R</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Deployment</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>Version Control (Git/GitHub)</p>
              </div>
              <div className="tech flex">
                <img src={js} alt="JS" />
                <p>NPM</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}
