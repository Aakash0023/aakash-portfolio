import "../styles/navbar.css";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (window.scrollY > lastScrollY && window.scrollY > 120) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${showNavbar ? "show" : "hide"} ${
        scrolled ? "glass" : ""
      }`}
    >
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>

        <a href="#work" onClick={() => setMenuOpen(false)}>
          Projects
        </a>

        <a href="#experience" onClick={() => setMenuOpen(false)}>
          Experience
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        <a
          href="/Aakash_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn mobile-btn"
        >
          Resume
        </a>
      </div>

      <a
        href="/Aakash_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="resume-btn desktop-btn"
      >
        Resume
      </a>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </button>
    </nav>
  );
};

export default Navbar;
