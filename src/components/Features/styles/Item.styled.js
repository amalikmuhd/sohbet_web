import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
