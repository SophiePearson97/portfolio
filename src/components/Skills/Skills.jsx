import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2>Skills</h2>
        <p>
          These are the main technologies and areas I have worked with during
          my training and project work.
        </p>
      </div>

      <div className="skills-grid">
        <div className="skills-card card">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>React Router</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        <div className="skills-card card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>REST APIs</li>
            <li>JWT Authentication</li>
          </ul>
        </div>

        <div className="skills-card card">
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Figma</li>
            <li>npm</li>
          </ul>
        </div>

        <div className="skills-card card">
          <h3>Currently Improving</h3>
          <ul>
            <li>SEO basics</li>
            <li>Performance optimisation</li>
            <li>Code structure and reusability</li>
            <li>Deployment workflows</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;