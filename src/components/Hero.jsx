import "../styles/hero.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  const words = ["TECH", "DESIGN", "STORIES"];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing Effect
  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));

          if (displayText === currentWord) {
            setTimeout(() => setIsDeleting(true), 1200);
          }
        } else {
          setDisplayText(currentWord.substring(0, displayText.length - 1));

          if (displayText === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  // Spotlight Effect
  useEffect(() => {
    const moveSpotlight = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);

      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", moveSpotlight);

    return () => {
      window.removeEventListener("mousemove", moveSpotlight);
    };
  }, []);

  return (
    <section className="hero">
      <div className="spotlight"></div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Aakash" className="hero-profile-image" />
        </div>
      </motion.div>

      <div className="hero-content">
        <motion.div
          className="hero-logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I Do
        </motion.div>

        <div className="hero-title">
          <div
            className={`typing-title ${
              words[wordIndex] === "STORIES" ? "stories-red" : ""
            }`}
          >
            {displayText}
            <span className="cursor">|</span>
          </div>

          <div className="static-title">
            ONE
            <br />
            CREATOR
          </div>
        </div>

        <motion.div
          className="hero-description"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
            ease: "easeOut",
          }}
        >
          Building digital experiences through
          <br />
          <span>Technology</span>,<span> Design</span> and
          <span> Visual Storytelling</span>.
        </motion.div>

        <a href="#work" className="hero-btn">
          <span>VIEW MY WORK</span>
          <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
