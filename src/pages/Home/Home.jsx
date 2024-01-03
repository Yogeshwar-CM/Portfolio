import React from "react";
import "./Home.css";
import Mode from "../../components/ModeButton/mode";
import Navbar from "../../components/Navbar/Navbar";
import Map_IMG from "../../assets/Map.png";

const Home = ({ toggleTheme, currentTheme }) => {
  return (
    <div className="Home">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main-grid">
        <div className="item-1 item"></div>
        <div className="item-2 item">
          <img src={Map_IMG} alt="" />
        </div>
        <div className="item-3 item">
          <h1 className="proj-head">PROJECTS</h1>
          <div className="foot-proj">
            <div className="arrow">
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
            <p className="view-proj">View Selected Projects</p>
          </div>
        </div>
        <div className="item-4 item">
          <Mode toggleTheme={toggleTheme} currentTheme={currentTheme} />
        </div>
        <div className="item-5 item">RESUME</div>
        <div className="item-6 item">
          <div className="skills-btn">
            Explore Skills <i class="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
        <div className="item-7 item">
          <h5>Need a Website?</h5>
          <p>
            I accept freelance jobs, collaborations with companies, startups and
            brands.
          </p>
          <button className="contact-btn">
            Let's Talk <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
        <div className="item-8 item">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-threads"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
        <div className="item-9 item">
          <h5>Short History</h5>
          <p className="about-pre">
            How I got into development and designing, and how I discovered the
            incredible value in the sweet spot where both intersect.
          </p>
          <div className="about-btn">
            <i class="fa-solid fa-arrow-right-long"></i>
            Read More
          </div>
        </div>
      </div>
      <div className="foot">yogeshwar_codes © 2024</div>
    </div>
  );
};

export default Home;
