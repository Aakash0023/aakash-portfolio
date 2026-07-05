import { motion } from "framer-motion";
import "../styles/work.css";

import crackthecampus from "../assets/projects/crackthecampus.png";
import scenetheory from "../assets/projects/scenetheory.png";
import cerabai from "../assets/projects/cerabai.jpg";
import codegalataa from "../assets/projects/codegalataa.jpg";

import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    id: "01",
    title: "CrackTheCampus",
    description:
      "A modern placement preparation platform built to help students prepare for coding interviews with an intuitive and responsive experience.",
    tech: ["React", "Vite", "CSS", "JavaScript"],
    image: crackthecampus,
    live: "",
    github: "",
  },

  {
    id: "02",
    title: "SceneTheory",
    description:
      "A movie discovery platform powered by the TMDB API with trending movies, advanced search, and detailed movie information.",
    tech: ["React", "Vite", "TMDB API", "CSS"],
    image: scenetheory,
    live: "",
    github: "",
  },

  {
    id: "03",
    title: "Cerabai",
    description:
      "AI-powered brain stroke detection system developed using deep learning for medical image analysis.",
    tech: ["Python", "PyTorch", "OpenCV", "Machine Learning"],
    image: cerabai,
    live: "",
    github: "",
  },

  {
    id: "04",
    title: "Code Galataa",
    description:
      "Coding analytics dashboard providing AI-powered insights into coding efficiency and performance.",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    image: codegalataa,
    live: "",
    github: "",
    status: "Product Team Project",
  },
];

const Work = () => {
  return (
    <section className="work" id="work">
      <motion.p
        className="work-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        PORTFOLIO
      </motion.p>

      <motion.h2
        className="work-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured <span>Projects</span>
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />

              <span className="project-number">{project.id}</span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <HiOutlineExternalLink />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                    GitHub
                  </a>
                )}{" "}
                {project.status && (
                  <span className="project-status">{project.status}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
