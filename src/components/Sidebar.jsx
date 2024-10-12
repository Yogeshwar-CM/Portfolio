import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="span box sidebar">
      <i
        className="fa-solid fa-house cursor-pointer"
        onClick={() => navigate("/")}
      ></i>
      <i
        className="fa-solid fa-briefcase cursor-pointer"
        onClick={() => navigate("/projects")}
      ></i>
      <i
        className="fa-solid fa-lightbulb cursor-pointer"
        onClick={() => navigate("/skills")}
      ></i>
      <i
        className="fa-solid fa-circle-info cursor-pointer"
        onClick={() => navigate("/about")}
      ></i>
      <i
        className="fa-solid fa-envelope cursor-pointer"
        onClick={() => navigate("/contact")}
      ></i>
    </div>
  );
}
