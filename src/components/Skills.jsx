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
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        SKILLS
      </motion.p>

      <h2 className="skills-title">
        <motion.span
          className="title-red"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          TECH
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
          STACK
        </motion.span>
      </h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            whileHover={{
              y: -8,
              scale: 1.08,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
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
