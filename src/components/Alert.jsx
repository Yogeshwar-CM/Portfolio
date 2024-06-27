import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function Alert() {
  const [rc, setRc] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef();

  const bellClicked = () => {
    setRc(true);
    setPopoverOpen(true);
  };

  const closePopover = () => {
    setPopoverOpen(false);
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setPopoverOpen(false);
    }
  };

  useEffect(() => {
    if (popoverOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverOpen]);

  return (
    <>
      <i className="fa-regular fa-bell" id="bell" onClick={bellClicked}></i>
      <div className={rc ? "redc redcc" : "redc"}></div>
      <div
        ref={popoverRef}
        className={popoverOpen ? "popover popover-t" : "popover"}
      >
        <div
          className="bg-blue-100 flex border border-blue-200 text-gray-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-white"
          role="alert"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="flex-shrink-0 size-4 mt-1 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </div>
            <div className="ms-3">
              <h3 className="font-semibold">Get the Best View on Desktop!</h3>
              <div className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                Psst! Make sure you're on your desktop or laptop for the full
                experience. Let's explore my portfolio together and unleash its
                full potential!
              </div>
            </div>
          </div>
          <i
            className="fa-solid fa-times close-button"
            onClick={closePopover}
          ></i>
        </div>
      </div>
    </>
  );
}
