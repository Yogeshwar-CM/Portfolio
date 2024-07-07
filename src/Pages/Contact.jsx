import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Alert from "../components/Alert";
import Animated from "./Animated";
import { useNavigate } from "react-router";
import Menu from "../components/Menu";
import Resume from "../components/Resume";
import Mode from "../components/Mode";

export default function Contact() {
  const nav = useNavigate();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

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
          setSuccess(true);
        },
        (error) => {
          setLoading(false);
          setError("Failed to send email.");
        }
      );
  };

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
              {loading && <p>Sending email...</p>}
              {error && <p className="error">{error}</p>}
              {success && <p className="success">Email sent successfully!</p>}
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
