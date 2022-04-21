import styled from "styled-components";

export const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
  font-family: "Inter", sans-serif;
  text-align: center;
  font-size: 4rem;
  @media (max-width: 1024px) {
    font-size: 4rem;
  }
  @media (max-width: 900px) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
  font-family: "Inter", sans-serif;
  font-size: 2rem;
  font-weight: 300;
  line-height: 28px;
  color: #1b1b1b;
  margin: 1rem 0 2rem;
  @media (max-width: 1024px) {
    font-size: 1.8rem;
    margin: 2rem 0;
  }
  @media (max-width: 900px) {
    font-size: 1.4rem;
    margin: 2rem 0;
  }
`;
