import React from "react";
import Templates from "./components/templates";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="App dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/templates" element={<Templates />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
