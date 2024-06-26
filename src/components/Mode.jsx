import React from "react";
import "./styles.css";

export default function Mode() {
  return (
    <div className="switch">
      <input type="checkbox" className="switch__input" id="Switch" />
      <label className="switch__label" htmlFor="Switch">
        <span className="switch__indicator"></span>
        <span className="switch__decoration"></span>
      </label>
    </div>
  );
}
