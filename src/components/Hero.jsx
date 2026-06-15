import "../styles/hero.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const words = ["TECH", "DESIGN", "STORIES"];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <section className="hero">
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="image-placeholder"></div>
      </motion.div>

      <div className="hero-content">
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          AAKASH
        </motion.p>

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

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
        >
          Building digital experiences through
          <br />
          technology, design and visual storytelling.
        </motion.p>

        <motion.button
          className="hero-btn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
        >
          VIEW MY WORK
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
