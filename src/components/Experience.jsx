import "../styles/experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024",
    title: "Web Developer Intern",
    company: "Manipal Institute of Technology",
    description:
      "Worked on backend services and Microsoft SQL APIs for the Helpdesk system.",
  },

  {
    year: "2025",
    title: "Research / Internship",
    company: "NITK Surathkal",
    description:
      "Worked on AI and software development projects while collaborating with researchers and students.",
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <p className="experience-subtitle">CAREER</p>

      <h2 className="experience-title">
        <span className="title-red">WORK</span>
        <br />
        <span className="title-white">EXPERIENCE</span>
      </h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-year">{exp.year}</span>

              <h3>{exp.title}</h3>

              <h4>{exp.company}</h4>

              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
