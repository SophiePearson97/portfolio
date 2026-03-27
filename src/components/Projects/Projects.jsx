import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>Projects</h2>
        <p>
          These projects reflect the skills I developed during my training,
          including frontend integration, React development, backend logic,
          authentication, debugging, and responsive design.
        </p>
      </div>

      <div className="projects-list">
        <article className="project-card card">
          <div className="project-top">
            <p className="project-label">Project 1</p>
            <h3>Kasa</h3>
          </div>

          <p className="project-description">
            A React-based property rental website developed from Figma designs.
            The project focused on reusable components, routing, and responsive
            layouts.
          </p>

          <div className="project-block">
            <h4>Challenges</h4>
            <p>
              One of the key challenges was building a clean component structure
              while also making sure the layout worked correctly across screen
              sizes. I also worked through routing and UI issues during the
              build.
            </p>
          </div>

          <div className="project-block">
            <h4>How I overcame them</h4>
            <p>
              I used React Router for navigation, broke the interface into
              reusable components, and used CSS and media queries to improve the
              responsive behaviour of the site.
            </p>
          </div>

          <div className="project-block">
            <h4>Skills developed</h4>
            <ul className="project-tags">
              <li>React</li>
              <li>React Router</li>
              <li>Component Architecture</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className="project-links">
            <a href="https://github.com/SophiePearson97/kasa.git" target="_blank" rel="noreferrer">
              View Code
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Live Site
            </a>
          </div>
        </article>

        <article className="project-card card">
          <div className="project-top">
            <p className="project-label">Project 2</p>
            <h3>Mon Vieux Grimoire</h3>
          </div>

          <p className="project-description">
            A full-stack book rating application with authentication, image
            upload, and a MongoDB database. This project allowed me to work on
            backend structure and secure API development.
          </p>

          <div className="project-block">
            <h4>Challenges</h4>
            <p>
              The main challenges included JWT authentication, protecting API
              routes, handling image uploads, and debugging issues linked to
              requests, errors, and route setup.
            </p>
          </div>

          <div className="project-block">
            <h4>How I overcame them</h4>
            <p>
              I organised the backend using Express and MongoDB, tested routes
              carefully with Postman, secured endpoints with JWT, and improved
              image handling with Sharp and multer.
            </p>
          </div>

          <div className="project-block">
            <h4>Skills developed</h4>
            <ul className="project-tags">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>JWT</li>
              <li>API Development</li>
            </ul>
          </div>

          <div className="project-links">
            <a href="https://github.com/SophiePearson97/my-old-grimoire-backend.git" target="_blank" rel="noreferrer">
              View Code
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Live Site
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;