import styled from "styled-components";

export const Section = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
  height: 100vh;
  background-color: white;
  @media (max-width: 1024px) {
    margin: 0;
    padding: 4rem 0;
    height: auto;
  }
`;

export const HeaderSection = styled.header``;

export const BodyStyled = styled.main`
  display: flex;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;
