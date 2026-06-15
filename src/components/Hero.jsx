import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="portrait"></div>
      </div>

      <div className="hero-right">
        <p className="subtitle">THE STORY</p>

        <h1>
          THEY
          <br />
          <span>NEVER</span>
          <br />
          TOLD YOU
        </h1>

        <p className="desc">
          Robotics & AI Student
          <br />
          Frontend Developer
          <br />
          Building products that matter.
        </p>
      </div>
    </section>
  );
};

export default Hero;
