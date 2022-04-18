import {
  Container,
  NavMenu,
  NavItem,
  NavItemLink,
  MobileIcon,
} from "./styles/Navbar.styled";

function NavBar() {
  return (
    <Container>
      <h1> 😊 Sohbet</h1>
      <main>
        <NavMenu>
          <NavItem>
            <NavItemLink>Get Sohbet</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink>Support</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink>Blog</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink>Developers</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink>Careers</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink>Donate</NavItemLink>
          </NavItem>
        </NavMenu>
      </main>
      <MobileIcon>Mobile</MobileIcon>
    </Container>
  );
}

export default NavBar;
