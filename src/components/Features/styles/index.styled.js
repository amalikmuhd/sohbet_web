import styled from "styled-components";

export const Section = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;

  @media (max-width: 1024px) {
    margin: 0;
    padding: 4rem 0;
    height: auto;
  }
`;
