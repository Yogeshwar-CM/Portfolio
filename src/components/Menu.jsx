import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./styles.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };

  return (
    <>
      <button onClick={toggleSidebar} className="M">
        <i className="fa-solid fa-bars-staggered text-2xl"></i>
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          style={{ zIndex: 9999999998 }}
          onClick={handleClickOutside}
        />
      )}
      <motion.div
        ref={sidebarRef}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-64 text-white shadow-lg sb"
        style={{ zIndex: 9999999999 }}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">Menu</h2>
            <button onClick={toggleSidebar} className="text-2xl">
              <i className="fa-solid fa-times"></i>
            </button>
          </div>
          <ul className="mt-4">
            <li className="mt-4">Home</li>
            <li className="mt-4">About</li>
            <li className="mt-4">Contact</li>
            <li className="mt-4">Services</li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
