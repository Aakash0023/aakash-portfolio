import "../styles/about.css";
import { motion } from "framer-motion";
import aboutImage from "../assets/about-image.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="about-subtitle">ABOUT</p>

          <h2 className="about-title">
            <span>BEYOND</span>
            <br />
            THE SCREEN
          </h2>

          <p className="about-text">
            I'm Aakash, a Graduate Engineer, Full-Stack Developer, GenAI
            enthusiast, and Photographer.
            <br />
            <br />
            I build intelligent digital experiences, create AI-powered
            solutions, and tell stories through technology, design, and visual
            creativity.
            <br />
            <br />
            I enjoy building digital experiences that combine technology,
            creativity, and human connection.
            <br />
            <br />
          </p>
        </motion.div>
      </div>

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="about-image-wrapper">
          <img
            src={aboutImage}
            alt="Creative Workspace"
            className="about-image"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
