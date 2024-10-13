import React from "react";
import figmadark from "../assets/figma.svg";
import jsdark from "../assets/js.svg";
import reactdark from "../assets/reactjs.svg";
import postmandark from "../assets/postman.svg";
import tailwinddark from "../assets/tailwind.svg";
import pythondark from "../assets/python.svg";
import { useNavigate } from "react-router";
import "./styles.css";

export default function Skills() {
  const navigate = useNavigate();
  return (
    <>
      <div className="scrollArea">
        <div className="scroll">
          <div className="m-scroll">
            <span className="skill-icon">
              <img src={pythondark} />
            </span>
            <span className="skill-icon">
              <img src={reactdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={postmandark} />
            </span>
            <span className="skill-icon">
              <img src={tailwinddark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={figmadark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
          </div>
        </div>
        <div className="scroll">
          <div className="l-scroll">
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
            <span className="skill-icon">
              <img src={jsdark} />
            </span>
          </div>
        </div>
      </div>
      <div
        className="skills-btn"
        onClick={() => {
          navigate("/skills");
        }}
      >
        <i className="fa-solid fa-arrow-right" id="skills-btn"></i>
        Explore all skills
      </div>
    </>
  );
}
