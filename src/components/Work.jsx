import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/work.css";

import scenetheory from "../assets/projects/scenetheory.png";
import cerabai from "../assets/projects/cerabai.jpg";
import codegalataa from "../assets/projects/codegalataa.jpg";

import photo1 from "../assets/photos/photo1.jpg";
import photo2 from "../assets/photos/photo2.jpg";
import photo3 from "../assets/photos/photo3.jpg";
import photo4 from "../assets/photos/photo4.jpg";
import photo5 from "../assets/photos/photo5.jpg";
import photo6 from "../assets/photos/photo6.jpg";

const projects = [
  {
    title: "SceneTheory",
    description: "Movie Discovery Platform built with React and TMDB API.",
    image: scenetheory,
    live: "https://scene-theor-git-main-aakash-s-projects02301.vercel.app/",
    github: "https://github.com/Aakash0023/SceneTheory",
  },

  {
    title: "Cerabai",
    description: "Brain Stroke Detection using AI and Machine Learning.",
    image: cerabai,
    github: "https://github.com/yourusername/cerabai",
  },

  {
    title: "Code Galataa",
    description: "AI-powered Coding Analytics Dashboard.",
    image: codegalataa,
  },
];

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

const Work = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="work" id="work">
      <p className="work-subtitle">PORTFOLIO</p>

      <h2 className="work-title">
        <span className="title-red">MY</span>
        <br />
        <span className="title-white">WORK</span>
      </h2>

      <div className="work-tabs">
        <button
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => setActiveTab("projects")}
        >
          PROJECTS
        </button>

        <button
          className={activeTab === "photography" ? "active" : ""}
          onClick={() => setActiveTab("photography")}
        >
          PHOTOGRAPHY
        </button>
      </div>

      {activeTab === "projects" ? (
        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-buttons">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      LIVE DEMO
                    </a>
                  )}

                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GITHUB
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="photo-image-wrapper"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <img
                src={photo}
                alt={`Photography ${index + 1}`}
                className="photo-item"
                onClick={() => setSelectedPhoto(photo)}
              />

              <div className="photo-overlay">
                <h3>Captured on</h3>
                <p>Sony A6400</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {selectedPhoto && (
        <div className="lightbox" onClick={() => setSelectedPhoto(null)}>
          <img
            src={selectedPhoto}
            alt="Full Preview"
            className="lightbox-image"
          />

          <button
            className="close-lightbox"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto(null);
            }}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default Work;
