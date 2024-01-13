import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import profile from "../assets/profile-image.png";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <section className="hero-section">
        <div className="hero-ls">
          <h1 className="hero-head">
            I'm <span>Yogeshwar</span>,<br />
            FullStack Developer
          </h1>
          <p className="hero-body">
            👋 Hey there! I'm a passionate Full Stack Developer.<br /> Let's connect
            and build something amazing !
          </p>
        </div>
        <div className="hero-rs">
          <img src={profile} alt="FullStack Developer Profile Image" />
        </div>
      </section>
    </div>
  );
};

export default Home;
