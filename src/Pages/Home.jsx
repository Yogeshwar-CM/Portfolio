import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpeg";
import { motion } from "framer-motion";
import "./Home.css";
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
    hidden: { opacity: 0, x: "-100vw" },
    visible: (direction) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
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
      {/* <div className="cold" ref={coldRef}></div> */}
      <Alert />
      <span className="menu-s">
        <Menu />
      </span>
      <AnimatedPage>
        <div className="Home">
          <motion.div
            className="sidebar box"
            initial="hidden"
            animate="visible"
            variants={boxVariants}
            custom="left"
          >
            <span>
              <button onClick={toggleSidebar}>
                <i className="fa-solid fa-bars-staggered text-2xl"></i>
              </button>
              {isOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
                  style={{ zIndex: 9999999990 }}
                  onClick={handleClickOutside}
                />
              )}
              <motion.div
                ref={sidebarRef}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={sidebarVariants}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 h-full w-64 sb text-white shadow-lg"
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
                    <li
                      className="mt-4"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Home
                    </li>
                    <li
                      className="mt-4"
                      onClick={() => {
                        navigate("/about");
                      }}
                    >
                      About
                    </li>
                    <li
                      className="mt-4"
                      onClick={() => {
                        navigate("/contact");
                      }}
                    >
                      Contact
                    </li>
                    <li
                      className="mt-4"
                      onClick={() => {
                        navigate("/skills");
                      }}
                    >
                      Services
                    </li>
                    <li
                      className="mt-4"
                      onClick={() => {
                        navigate("/projects");
                      }}
                    >
                      Projects
                    </li>
                  </ul>
                </div>
              </motion.div>
            </span>
            <div className="span">
              <i
                className="fa-solid fa-circle-info cursor-pointer"
                onClick={() => {
                  navigate("/about");
                }}
              ></i>
            </div>
          </motion.div>

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
