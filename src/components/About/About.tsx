import { Container } from "./styles";
import NeerajSharma from "../../assets/Neeraj_Sharma.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          I am a Full Stack Developer and Data Analyst with expertise in Python, Java, React JS, and MySQL, passionate about leveraging data analytics and financial insights to drive impactful solutions. I have extensive experience in e-commerce web development and financial market analysis, along with a deep understanding of the stock market. My keen interest in trading and investment strategies motivates me to continuously learn and innovate. I am committed to delivering high-quality applications and collaborating effectively within dynamic, fast-paced environments.
          </p>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={NeerajSharma} alt="Neeraj Sharma" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
