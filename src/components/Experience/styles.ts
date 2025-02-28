import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  text-align: center;
  padding: 0 2rem;

  h2 {
    display: inline-block;
    margin-bottom: 4rem;
    font-size: 3.5rem;
    color: var(--green);
    position: relative;

    &::after {
      content: "";
      display: block;
      width: 60%;
      height: 3px;
      background: var(--green);
      margin: 0.5rem auto 0;
    }
  }

  .experience-content {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .experience-item {
    background: #ffffff;
    padding: 2.5rem;
    border-radius: 12px;
    width: 90%;
    text-align: left;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensures content is spaced evenly */

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    h3 {
      margin-bottom: 1.5rem;
      color: var(--green);
      font-size: 2.2rem;
    }

    p {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      color: #555;
      line-height: 1.6;

      strong {
        color: #333;
      }
    }

    ul {
  margin-top: 1.5rem;
  padding-left: 2rem;
  list-style: none; /* Remove default bullets */

  li {
    font-size: 1.5rem;
    margin-bottom: 1.2rem; /* Increased spacing between list items */
    color: #555;
    line-height: 1.6;
    position: relative; /* For custom bullet positioning */
    padding-left: 2rem; /* Space for custom bullet */

    &::before {
      content: "•"; /* Custom bullet point */
      color: var(--green); /* Use your theme color */
      font-size: 2rem; /* Larger bullet size */
      position: absolute;
      left: 0;
      top: -0.2rem; /* Adjust vertical alignment */
    }

    &:hover {
      color: #333; /* Darker text on hover */
      transform: translateX(5px); /* Slight movement on hover */
      transition: transform 0.2s ease, color 0.2s ease;
    }
  }
}
  }

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 3rem;
    }

    .experience-item {
      width: 100%;
      padding: 2rem;
    }
  }

  @media only screen and (max-width: 480px) {
    h2 {
      font-size: 2.5rem;
    }

    .experience-item {
      padding: 1.5rem;

      h3 {
        font-size: 2rem;
      }

      p {
        font-size: 1.4rem;
      }

      ul li {
        font-size: 1.4rem;
      }
    }
  }
`;