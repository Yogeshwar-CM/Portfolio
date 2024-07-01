import React from "react";
import { useNavigate } from "react-router";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="proj-title">PROJECTS</h1>
      <span className="proj-btn">
        <i
          className="fa-solid fa-arrow-right"
          id="proj-btn"
          onClick={() => {
            navigate("/projects");
          }}
        ></i>
      </span>
    </>
  );
}
