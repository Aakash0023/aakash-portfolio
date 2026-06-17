import "../styles/about.css";
import { motion } from "framer-motion";
import aboutImage from "../assets/about-image.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <motion.p
          className="about-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ABOUT
        </motion.p>

        <h2 className="about-title">
          <motion.span
            className="title-red"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            BEYOND
          </motion.span>

          <br />

          <motion.span
            className="title-white"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            THE SCREEN
          </motion.span>
        </h2>

        <motion.p
          className="about-text"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          I'm Aakash, a Graduate Engineer, Full-Stack Developer, GenAI
          enthusiast, and Photographer.
          <br />
          <br />
          I build intelligent digital experiences, create AI-powered solutions,
          and tell stories through technology, design, and visual creativity.
          <br />
          <br />I enjoy building digital experiences that combine technology,
          creativity, and human connection.
        </motion.p>
      </div>

      <motion.div
        className="about-right"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <div className="about-image-wrapper">
          <img src={aboutImage} alt="About Aakash" className="about-image" />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
