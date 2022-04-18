import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  background-color: #9dbbf8;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
