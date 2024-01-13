import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import profile from "../assets/profile-image.png";
import { motion, useAnimation } from "framer-motion";

const Home = () => {
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const handleInView = (inView) => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  };

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
            👋 Hey there! I'm a passionate Full Stack Developer.
            <br /> Let's connect and build something amazing !
          </p>
        </div>
        <div className="hero-rs">
          <img src={profile} alt="FullStack Developer Profile Image" />
        </div>
      </section>
      <section className="skills-section">
        <motion.div
          className="card"
          variants={variants}
          initial="hidden"
          animate={controls}
          custom={0}
          onAnimationStart={() => console.log("Animation started")}
          onAnimationComplete={() => console.log("Animation completed")}
          whileInView={handleInView}
        ></motion.div>
        <motion.div
          className="card"
          variants={variants}
          initial="hidden"
          animate={controls}
          custom={1}
          whileInView={handleInView}
        ></motion.div>
        <motion.div
          className="card"
          variants={variants}
          initial="hidden"
          animate={controls}
          custom={2}
          whileInView={handleInView}
        ></motion.div>
      </section>
    </div>
  );
};

export default Home;
