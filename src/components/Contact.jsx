import "../styles/contact.css";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        CONTACT
      </motion.p>

      <h2 className="contact-title">
        <span>LET'S</span>
        <br />
        CONNECT
      </h2>

      <motion.p
        className="contact-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Open to internships, collaborations, freelance opportunities, and
        meaningful conversations.
      </motion.p>

      <div className="social-icons">
        <a href="mailto:aakashb02301@gmail.com">
          <MdEmail />
        </a>

        <a
          href="https://www.linkedin.com/in/aakashb23/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Aakash0023"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
