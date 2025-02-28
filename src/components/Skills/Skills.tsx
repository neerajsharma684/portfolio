import { Container } from "./styles";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import pythonIcon from "../../assets/python-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import excelIcon from "../../assets/excel-icon.svg";
import analyticsIcon from "../../assets/analytics-icon.svg";
import aiIcon from "../../assets/ai-icon.png";
import ScrollAnimation from "react-animate-on-scroll";

const skills = [
  { name: "Python", icon: pythonIcon },
  { name: "React", icon: reactIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "WordPress", icon: wordpress },
  { name: "Shopify", icon: shopify },
  { name: "Excel", icon: excelIcon },
  { name: "Data Analytics", icon: analyticsIcon },
  { name: "AI", icon: aiIcon },
];

export function Skills() {
  return (
    <Container id="skills">
      <h2>My Skills</h2>
      <div className="hard-skills">
        {skills.map((skill, index) => (
          <div className="hability" key={skill.name}>
            <ScrollAnimation animateIn="fadeInUp" delay={(index + 1) * 0.1 * 1000}>
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </Container>
  );
}
