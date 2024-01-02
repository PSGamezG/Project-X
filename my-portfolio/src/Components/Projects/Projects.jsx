import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <p>Here you can find some of my git and deployed work</p>

      <a
        href="https://github.com/PSGamezG/PI-countries"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/countries.jpg" alt="Project 1" />
      </a>

      <a
        href="https://github.com/pi-rym/PI-PSGamezG"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/wp6445020.jpg" alt="Project 1" />
      </a>

      <a
        href="https://healthplus-henry.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/HealthPlus.png" alt="Project 1" />
      </a>
    </div>
  );
};

export default Projects;
