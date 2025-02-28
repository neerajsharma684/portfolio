import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>My Experience</h2>
      <div className="experience-content">
        <ScrollAnimation animateIn="fadeInLeft">
          <div className="experience-item">
            <h3>Stegpearl</h3>
            <p><strong>Role:</strong> Web Developer & E-commerce Strategist</p>
            <p><strong>Duration:</strong> June 2024 - Present</p>
            <ul>
              <li>Utilized React, Python, and Excel for internal projects, boosting productivity by 30%.</li>
              <li>Managed websites using WordPress for German clients like Terralumen, EPP Solar, SolarHook, and CamperGold, increasing client satisfaction by 25%.</li>
              <li>Explored and tested various AI tools, improving digital strategy efficiency by 20%.</li>
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <div className="experience-item">
            <h3>JP Morgan Chase & Co. (Virtual Experience)</h3>
            <p><strong>Role:</strong> Software Engineering Virtual Intern</p>
            <p><strong>Duration:</strong> October 2022 - November 2022</p>
            <ul>
              <li>Implemented Perspective library for live graphing, boosting trader productivity by 30%.</li>
              <li>Improved data interpretation accuracy by 40% through financial data visualization.</li>
            </ul>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}