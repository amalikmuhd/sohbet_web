import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1024px) {
    justify-content: space-between;
    margin: 0 2rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  list-style-type: none;
  margin: 0 2rem;
  font-size: 1.6rem;
  font-weight: 300;
`;

export const NavItemLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
`;
