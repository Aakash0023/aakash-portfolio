import "../styles/navbar.css";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Aakash Logo" />
      </div>

      {/* Navigation */}
      <div className="nav-links">
        <a href="#about">ABOUT</a>

        <a href="#skills">SKILLS</a>

        <a href="#work">WORK</a>

        <a href="#experience">EXPERIENCE</a>

        <a href="#contact">CONTACT</a>
      </div>

      {/* Resume Button */}
      <a
        href="/Aakash_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="resume-btn"
      >
        RESUME ↓
      </a>
    </nav>
  );
};

export default Navbar;
