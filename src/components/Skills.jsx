import "../styles/skills.css";
import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact color="#61DAFB" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs color="#FFFFFF" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs color="#F7DF1E" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color="#3178C6" />,
  },

  {
    name: "HTML5",
    icon: <FaHtml5 color="#E34F26" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt color="#1572B6" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss color="#06B6D4" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color="#339933" />,
  },

  {
    name: "Express.js",
    icon: <SiExpress color="#FFFFFF" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb color="#47A248" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql color="#4479A1" />,
  },
  {
    name: "Python",
    icon: <FaPython color="#3776AB" />,
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <motion.p
        className="skills-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        SKILLS
      </motion.p>

      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        TECH
        <br />
        STACK
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
          >
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
