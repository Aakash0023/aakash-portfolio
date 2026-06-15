import "../styles/about.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="about-subtitle">ABOUT</p>

        <h2 className="about-title">
          BEYOND
          <br />
          THE SCREEN
        </h2>

        <p className="about-text">
          I'm Aakash, A Graduate Engineer, Full-stack Developer, GenAI
          enthusiast, and Photographer. I build intelligent Digital Experiences,
          create AI-powered solutions, and tell stories through Technology,
          Design, and Visual creativity.
          <br />
          <br />I Enjoy Building Digital experiences that combine Technology,
          creativity, and Human connection.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
