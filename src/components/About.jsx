import "../styles/about.css";
import { motion } from "framer-motion";
import aboutImage from "../assets/about-image.png";
import {
  FaLaptopCode,
  FaBrain,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    value: "B.E Robotics & AI",
  },
  {
    icon: <FaLaptopCode />,
    title: "Projects",
    value: "10+ Completed",
  },
  {
    icon: <FaBrain />,
    title: "DSA",
    value: "350+ Problems",
  },
  {
    icon: <FaRocket />,
    title: "Career",
    value: "Open to SDE Roles",
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-image-section"
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-image-wrapper">
          <img src={aboutImage} alt="Aakash" />
        </div>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">ABOUT ME</span>

        <h2>
          Building software that creates
          <span> real impact.</span>
        </h2>

        <p>
          I'm Aakash B, a Full Stack Developer passionate about building
          scalable web applications, AI-powered products, and modern user
          experiences using React, Node.js, and emerging technologies.
        </p>

        <div className="about-grid">
          {cards.map((card, index) => (
            <motion.div
              className="about-card"
              key={index}
              whileHover={{ y: -8 }}
            >
              <div className="card-icon">{card.icon}</div>

              <h4>{card.title}</h4>

              <span>{card.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
