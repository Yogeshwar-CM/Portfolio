import React from "react";
import "./Contact.css";
import Alert from "../components/Alert";
import Animated from "./Animated";
import { useNavigate } from "react-router";
import Menu from "../components/Menu";
import Resume from "../components/Resume";
import Mode from "../components/Mode";

export default function Contact() {
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
        <div className="Contact">
          <div className="contact-grid">
            <form className="form-grid box">
              <textarea
                className="message"
                placeholder="Type your message here..."
              ></textarea>
              <input type="email" className="email" placeholder="Your email" />
              <input type="text" className="name" placeholder="Your name" />
              <div className="cb">
                <div className="contact-btnn">
                  <i className="fa-solid fa-arrow-right text-2xl"></i>
                </div>
              </div>
            </form>

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
