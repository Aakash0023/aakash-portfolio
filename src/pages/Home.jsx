import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />

      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
