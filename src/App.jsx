import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home toggleTheme={toggleTheme} currentTheme={theme} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
