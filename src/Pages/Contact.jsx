import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import Alert from "../components/Alert";
import Animated from "./Animated";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router";
import Menu from "../components/Menu";
import Resume from "../components/Resume";
import Mode from "../components/Mode";
import Socials from "../components/Socials";

export default function Contact() {
  const nav = useNavigate();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure fields are not empty
    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setLoading(true);
    toast.info("Email Sending...");

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_7plmwy9",
        "template_5opzr4s",
        templateParams,
        "bAx9boyeNgiHHiYoF"
      )
      .then(
        (response) => {
          setLoading(false);
          toast.success("Email sent successfully!");
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send email.");
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <Alert />
      {/* <Menu />
      <i
        className="fa-solid fa-rotate-left cursor-pointer absolute text-xl top-3 right-4 pt-1 pr-2 hidden sm:block"
        onClick={() => {
          nav("/");
        }}
      ></i> */}
      <Animated>
        <div className="Contact">
          <div className="contact-grid">
            <Sidebar />
            <form className="form-grid box" onSubmit={handleFormSubmit}>
              <textarea
                className="message"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input
                type="email"
                className="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                className="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="cb">
                <button
                  type="submit"
                  className="contact-btnn"
                  disabled={loading}
                >
                  <i className="fa-solid fa-arrow-right text-2xl"></i>
                </button>
              </div>
            </form>
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
