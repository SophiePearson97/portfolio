import "./Projects.css";
import grimoire1 from "../../assets/images/Grimoire_1.png";
import grimoire2 from "../../assets/images/Grimoire_2.png";
import kasa1 from "../../assets/images/Kasa_1.png";
import kasa2 from "../../assets/images/Kasa_2.png";
import booki from "../../assets/images/Booki.png";
import sophie from "../../assets/images/Sophie.png";
import nina from "../../assets/images/Nina.png";
import menu from "../../assets/images/Menu.png";

const projects = [
  {
    label: "Frontend Project",
    title: "Kasa",
    description:
      "Kasa is a React-based property rental website built from Figma designs. The project focused on reusable components, routing, and a fully responsive layout.",
    image: [kasa1, kasa2],
    features: [
      "Component-based architecture",
      "React Router navigation",
      "Responsive design",
      "Dynamic data rendering",
      "Reusable UI components",
    ],
    github: "https://github.com/SophiePearson97/kasa.git",
  },
  {
    label: "Backend Project",
    title: "Mon Vieux Grimoire",
    description:
      "Backend API built with Node.js and Express featuring JWT authentication, MongoDB integration, and image processing with Multer and Sharp.",
    image: [grimoire1, grimoire2],
    features: [
      "JWT Authentication",
      "Secure password hashing with bcrypt",
      "RESTful API endpoints",
      "Image upload and optimisation",
      "MongoDB integration",
    ],
    github: "https://github.com/SophiePearson97/my-old-grimoire-backend.git",
  },
  {
    label: "JavaScript Project",
    title: "Sophie Bluel – Architecture Portfolio",
    description:
      "Dynamic portfolio website built with JavaScript, including filtering functionality and API integration.",
    image: [sophie, sophie],
    features: [
      "DOM manipulation",
      "Dynamic filtering system",
      "API integration",
      "Event handling",
    ],
    github: "https://github.com/SophiePearson97/Project_3.git",
  },
  {
    label: "Optimisation Project",
    title: "Nina Carducci – Photographer Website",
    description:
      "Optimised an existing website to improve performance, accessibility, and SEO.",
    image: [nina, nina],
    features: [
      "Performance optimisation",
      "SEO improvements",
      "Accessibility fixes",
      "Debugging",
    ],
    github: "https://github.com/SophiePearson97/project-4.git",
  },
  {
    label: "HTML & CSS Project",
    title: "Booki – Accommodation Website",
    description:
      "Responsive website built from mock-ups using HTML and CSS with a focus on layout and design accuracy.",
    image: [booki, booki],
    features: [
      "Responsive layout",
      "Flexbox",
      "Design integration",
      "Clean structure",
    ],
    github: "https://github.com/SophiePearson97/Project-2.git",
  },
  {
    label: "Planning Project",
    title: "Menu Maker (Qwenta)",
    description:
      "Planned a full web application using agile methodology, including technical specifications and API design.",
    image: [menu, menu],
    features: [
      "Agile workflow",
      "Kanban board",
      "API planning",
      "Technical documentation",
    ],
  },
];

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

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <p className="project-label">{project.label}</p>

            <div className="project-image-wrapper">
              <img
                src={project.image[0]}
                alt={project.title}
                className="project-image primary"
              />
              <img
                src={project.image[1]}
                alt={project.title}
                className="project-image secondary"
              />
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <div className="project-section">
              <h4>Key Features</h4>
              <ul className="project-features">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-links">
              <a
                className="button button-secondary"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;