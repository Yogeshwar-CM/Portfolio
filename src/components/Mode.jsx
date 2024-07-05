import React, { useState } from "react";
import "./styles.css";

export default function Mode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const localStorageAvailable = checkLocalStorageAvailability();
    if (localStorageAvailable) {
      const savedMode = localStorage.getItem("mode");
      return savedMode !== "light"; // default to dark mode if no preference is saved
    }
    return true; // default to dark mode if localStorage is not available
  });

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (checkLocalStorageAvailability()) {
      localStorage.setItem("mode", newMode ? "dark" : "light");
    }
    document.body.classList.toggle("light-mode", !newMode);
  };

  function checkLocalStorageAvailability() {
    try {
      const testKey = "__localStorageTest__";
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      console.warn(
        "localStorage is not available. Mode preference won't persist."
      );
      return false;
    }
  }

  return (
    <div className="switch">
      <input
        type="checkbox"
        className="switch__input"
        id="Switch"
        checked={!isDarkMode}
        onChange={toggleMode}
        disabled={!checkLocalStorageAvailability()}
      />
      <label className="switch__label" htmlFor="Switch">
        <span className="switch__indicator"></span>
        <span className="switch__decoration"></span>
      </label>
      {!checkLocalStorageAvailability() && (
        <p className="error-message">
          Mode preference cannot be saved due to browser settings. Please adjust
          your browser settings to enable this feature.
        </p>
      )}
    </div>
  );
}
