import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  text-align: center;

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    color: var(--green);
  }

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
    justify-content: center;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .hard-skills {
      justify-content: center;
    }
  }
`;