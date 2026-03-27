import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>About Me</h2>
        <p>
          I am a junior web developer currently completing the OpenClassrooms
          Web Developer path. Through this training, I have built both frontend
          and backend projects and developed strong foundations in responsive
          design, React, JavaScript, APIs, and database-driven applications.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card card">
          <h3>My Profile</h3>
          <p>
            I enjoy building clean, user-friendly websites and applications with
            a strong focus on structure, readability, and responsive layouts. I
            like solving problems step by step and turning project requirements
            into practical solutions.
          </p>
        </div>

        <div className="about-card card">
          <h3>Training Path</h3>
          <p>
            My training has covered HTML, CSS, JavaScript, React, Node.js,
            Express, MongoDB, Git, GitHub, debugging, API integration, and web
            performance basics. It has helped me develop both technical skills
            and a more professional development workflow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;