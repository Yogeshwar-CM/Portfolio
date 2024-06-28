import React from "react";
import "./About.css";
import Alert from "../components/Alert";
import Animated from "./Animated";
import { useNavigate } from "react-router";
import Menu from "../components/Menu";
import Resume from "../components/Resume";
import Mode from "../components/Mode";

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
            <div className="main-abt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus sed veniam quos rem itaque ullam ut magnam corrupti
              praesentium soluta repellat voluptate id ipsa atque vel,
              perspiciatis quae nisi voluptatum? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Necessitatibus sed veniam quos rem
              itaque ullam ut magnam corrupti praesentium soluta repellat
              voluptate id ipsa atque vel, perspiciatis quae nisi voluptatum?
            </div>
            <div className="resume box">
              <Resume />
            </div>
            <div className="mode box">
              <Mode />
            </div>
            <div className="socials box"></div>
          </div>
        </div>
      </Animated>
    </>
  );
}
