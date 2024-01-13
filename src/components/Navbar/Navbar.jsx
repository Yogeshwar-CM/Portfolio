import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links l1">
        <p className="name">Yogeshwar</p>
        <p>About</p>
        <p>Projects</p>
        <p>Skills</p>
      </div>
      <div className="l2 links">
        <p>Resume</p>
        <button>Hire Me</button>
      </div>
    </div>
  );
};

export default Navbar;
