import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpeg";
import { motion } from "framer-motion";
import "./Home.css";
import Sidebar from "../components/Sidebar";
import AnimatedPage from "./Animated";
import Mode from "../components/Mode";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Form from "../components/Form";
import Projects from "../components/Projects";
import Alert from "../components/Alert";
import Menu from "../components/Menu";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();
  const coldRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [rc, setRc] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

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

  const handleMouseMove = (event) => {
    if (coldRef.current) {
      coldRef.current.style.left = `${event.clientX - 100}px`;
      coldRef.current.style.top = `${event.clientY - 100}px`;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };

  const boxVariants = {
    hidden: { opacity: 0, y: "10vh" },
    visible: (direction) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  const bellClicked = () => {
    setRc(true);
    setPopoverOpen(true);
  };

  const closePopover = () => {
    setPopoverOpen(false);
  };

  return (
    <>
      <Alert />
      <span className="menu-s">
        <Menu />
      </span>
      <AnimatedPage>
        <div className="Home">
          <Sidebar />
          <motion.div
            className="box about"
            initial="hidden"
            animate="visible"
            variants={boxVariants}
            custom="right"
          >
            <div className="hey">
              Hello There, I am <span className="name">Yogeshwar</span>
              <br /> FullStack Developer and Designer
            </div>
            <div
              className="about-btn"
              onClick={() => {
                navigate("/about");
              }}
            >
              <i className="fa-solid fa-arrow-right" id="abt-btn"></i>
              About Me
            </div>
          </motion.div>

          <motion.div
            className="profile box"
            initial="hidden"
            animate="visible"
            variants={boxVariants}
            custom="right"
            onClick={() => {
              navigate("/about");
            }}
          >
            <img src={profile} alt="profile picture" className="profile-pic" />
          </motion.div>

          <motion.div
            className="mode box"
            initial="hidden"
            animate="visible"
            variants={boxVariants}
            custom="bottom"
          >
            <Mode />
          </motion.div>

          <motion.div
            className="skills box"
            initial="hidden"
            animate="visible"
            variants={boxVariants}
            custom="bottom"
          >
            <Skills />
          </motion.div>

          <motion.div
            className="box resume"
            initial="hidden"
            animate="visible"
            variants={boxVariants}
            custom="right"
          >
            <Resume />
          </motion.div>

          <motion.div
            className="box projects"
            initial="hidden"
            animate="visible"
            variants={boxVariants}
            custom="left"
          >
            <Projects />
          </motion.div>

          <motion.div
            className="contact box"
            initial="hidden"
            animate="visible"
            variants={boxVariants}
            custom="bottom"
          >
            <Form />
          </motion.div>
        </div>
      </AnimatedPage>
    </>
  );
};

export default Home;
