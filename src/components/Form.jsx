import React from "react";
import { useNavigate } from "react-router";

export default function Form() {
  const navigate = useNavigate();
  return (
    <>
      <div className="contact-l">
        <div className="main-c">Need a Website?</div>
        <p className="contact-c">
          I accept freelance jobs, collaborations with startups / brands.
        </p>
      </div>
      <div
        className="contact-btn"
        onClick={() => {
          navigate("/contact");
        }}
      >
        <i className="fa-solid fa-arrow-right" id="contact-btn"></i>
        Let's Talk
      </div>
    </>
  );
}
