import {
  Container,
  InnerContainer,
  Title,
  Subtitle,
} from "../styles/Description.styled";
import { bodyData } from "../Data";
function Description() {
  return (
    <Container>
      <InnerContainer>
        <Title>{bodyData[0].title}</Title>
        <Subtitle>{bodyData[0].subTitle}</Subtitle>
      </InnerContainer>
    </Container>
  );
}

export default Description;
