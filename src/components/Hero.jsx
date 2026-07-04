import "../styles/hero.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImage from "../assets/hero-image.png";

import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "React Developer",
    "AI Enthusiast",
    "Problem Solver",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.substring(0, displayText.length + 1));

          if (displayText === current) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(current.substring(0, displayText.length - 1));

          if (displayText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 45 : 90
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);

      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hero">
      <div className="aurora"></div>
      <div className="grid-bg"></div>
      <div className="mouse-light"></div>

      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="hero-badge">👋 Hello, I'm Aakash</span>

          <h1>
            Building
            <span> Modern Digital </span>
            Experiences
          </h1>

          <div className="typing">
            {displayText}
            <span>|</span>
          </div>

          <p>
            Passionate Full Stack Developer focused on building scalable web
            applications, AI-powered products and clean user experiences using
            modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="/resume.pdf" className="secondary-btn" target="_blank">
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/" target="_blank">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/" target="_blank">
              <FaLinkedin />
            </a>

            <a href="https://leetcode.com/" target="_blank">
              <SiLeetcode />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="image-ring">
            <div className="image-glow"></div>

            <img src={heroImage} alt="Aakash" />
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-down">
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Hero;
