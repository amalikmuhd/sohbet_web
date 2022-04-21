import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: flex-start;
    margin: 2rem 2rem;
  }
`;

export const InnerContainer = styled.div`
  width: 60%;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const Title = styled.h1`
  font-size: 5rem;
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
  margin: 4rem 0;
  @media (max-width: 1024px) {
    font-size: 1.8rem;
    margin: 2rem 0;
  }
  @media (max-width: 900px) {
    font-size: 1.4rem;
    margin: 2rem 0;
  }
`;
