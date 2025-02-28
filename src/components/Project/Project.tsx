import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const projects = [
  {
    name: "Financial Market Analysis",
    description: "Data-driven investment insights using Fundamental & Technical Analysis with Machine Learning models for accurate decision-making.",
    techStack: ["Python", "Data Analytics", "Yahoo Finance API"]
  },
  {
    name: "NeeRo Kart: E-Commerce Website",
    description: "Online retail platform featuring a diverse catalog, robust categorization, and detailed product pages for an enhanced shopping experience.",
    techStack: ["Next.js", "Payload CMS", "MongoDB"]
  }
];

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation animateIn="flipInX" delay={index * 0.1 * 1000} key={project.name}>
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </header>
              <div className="body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
