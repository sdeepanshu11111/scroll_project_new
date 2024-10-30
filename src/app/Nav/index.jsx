// components/Nav.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import "./index.scss";
import NavIcon from "../assets/navSvg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation configuration with smoother easing
  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Delay between each item for smoother effect
        delayChildren: 0.3, // Initial delay before children animations start
        ease: "easeInOut", // Smoother easing function
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start further down for smoother upward movement
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // Slightly longer duration for smoothness
        ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for a subtle bounce effect
      },
    },
  };

  return (
    <div className="nav-container">
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <NavIcon />
      </button>

      {isOpen && (
        <motion.div
          className="fullpage-nav"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={navVariants} // Apply the stagger effect to the parent
        >
          <motion.div className="nav-content">
            {["projects", "studio", "contact"].map((text, index) => (
              <motion.h1 key={index} variants={itemVariants}>
                {text}
              </motion.h1>
            ))}
          </motion.div>
          <div className="nav-footer">
            <a href="#" className="social-link">
              Twitter
            </a>
            <a href="#" className="social-link">
              Instagram
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Nav;
