import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        <p>Looking to collaborate on a project or have an exciting job opportunity?</p>
        <p>I'm open to new roles and freelance projects. Let's connect and create something great!</p>
      </header>

      <div className="contacts">
        <div>
          <a href="mailto:neerajmudgal684@gmail.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:neerajmudgal684@gmail.com">neerajmudgal684@gmail.com</a>
        </div>
        <div>
          <a href="tel:+919588084715"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919588084715">(+91) 9588084715</a>
        </div>
      </div>
    </Container>
  )
}