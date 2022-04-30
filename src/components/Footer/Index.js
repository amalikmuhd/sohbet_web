import {
  Container,
  AboutContainer,
  ListMenuContainer,
} from "./styles/Footer.styled";
function Footer() {
  return (
    <Container>
      <AboutContainer>
        <p>Sohbet is a product of Aoomle Inc.</p>
        <p>Copyright Aoomle {new Date().getFullYear()}</p>
      </AboutContainer>
      <ListMenuContainer>
        <ul>
          <h1>Download</h1>
          <p> Android </p>
          <p> iPhone</p>
        </ul>

        <ul>
          <h1>Social</h1>
          <p> Twitter </p>
          <p> Instagram</p>
        </ul>

        <ul>
          <h1>Product</h1>
          <p> About </p>
          <p> Contact</p>
        </ul>
      </ListMenuContainer>
    </Container>
  );
}

export default Footer;
