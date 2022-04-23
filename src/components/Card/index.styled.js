import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 40%;
  max-width: 100%;
  border-radius: 2rem;
  background-color: white;
  padding: 5rem 4rem 3rem;
  box-shadow: 0px 4px 12px rgb(0 0 0 / 12%), 0px 0px 2px rgb(0 0 0 / 8%);
  margin: 2rem 0;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Image = styled.img`
  width: 60%;
  max-width: 100%;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 22px;
  color: #1b1b1b;
  margin-top: 1rem;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
    margin: 2rem 0;
  }

  @media (max-width: 900px) {
    font-size: 1.4rem;
    margin: 2rem 0;
  }
`;
