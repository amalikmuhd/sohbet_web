import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: baseline;
  padding: 2rem 0;
  @media (max-width: 1024px) {
    align-items: stretch;
    flex-direction: column-reverse;
  }
`;

export const AboutContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;
export const ListMenuContainer = styled.main`
  flex: 2;
  display: flex;
  justify-content: space-around;
`;
