import { Container, ImageStyled } from "../styles/Image.styled";
import sohbetPicture from "../images/screenshot.png";
function Image() {
  return (
    <Container>
      <ImageStyled src={sohbetPicture}></ImageStyled>
    </Container>
  );
}

export default Image;
