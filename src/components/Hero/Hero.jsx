import "./Hero.css";

const Hero = () => {
  return (
    <section id="top" className="hero">
      <div className="hero-content">
        <p className="hero-kicker">Junior Web Developer</p>
        <h1>Sophie Pearson</h1>
        <h2>Building clean, responsive web experiences with React and Node.js.</h2>
        <p className="hero-text">
          I am a junior developer completing the OpenClassrooms Web Developer
          path, with hands-on experience in frontend and backend projects using
          React, JavaScript, Express, MongoDB, and responsive design.
        </p>

        <div className="hero-actions">
          <button
            className="button"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </button>
        </div>
      </div>

      <div className="hero-panel">
        <p className="hero-panel-label">Current Focus</p>
        <ul className="hero-points">
          <li>React component-based development</li>
          <li>Responsive layouts across devices</li>
          <li>REST APIs and backend logic</li>
          <li>Clean, readable project structure</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;