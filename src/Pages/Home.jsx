// Home.jsx

import React from "react";
import "./Home.css";

const Home = () => {
  function toggleLightMode() {
    document.body.classList.toggle("light-mode");
  }

  return (
    <div className="Home">
      <aside className="sidebar">Sidebar</aside>
      <section className="about">About</section>
      <section className="about">About</section>
      <section className="profile">Profile</section>
      <section className="skills">Skills</section>
      <section className="skills">Skills</section>
      <section className="projects">Projects</section>
      <section className="projects">Projects</section>
      <section className="contact">Contact</section>
      <section className="contact">Contact</section>
    </div>
  );
};

export default Home;
