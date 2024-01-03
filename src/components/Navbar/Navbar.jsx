import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="nav-list">
        <li className="nav-item-1">Home</li>
        <li className="nav-item-2">About</li>
        <li className="nav-item-3">Project</li>
        <li className="nav-item-4">Skills</li>
      </ul>
    </div>
  );
};

export default Navbar;
