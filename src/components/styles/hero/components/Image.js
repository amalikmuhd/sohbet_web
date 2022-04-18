import { Container, ImageStyled } from "../styles/Image.styled";
import sohbetPicture from "../images/iphone-screenshot-light-96ad4bb227af002ce31138a8f30771e6c8fea2ae99db939f7921f93ae6e8a531.png";
import sohbetPicture2 from "../images/screenshot.png";
function Image() {
  return (
    <Container>
      <ImageStyled src={sohbetPicture}></ImageStyled>
      <ImageStyled src={sohbetPicture2}></ImageStyled>
    </Container>
  );
}

export default Image;
