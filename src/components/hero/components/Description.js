import {
  Container,
  InnerContainer,
  Title,
  Subtitle,
  GetSohbet,
} from "../styles/Description.styled";
import data from "../Data";
function Description() {
  return (
    <Container>
      <InnerContainer>
        <Title>{data[0].title}</Title>
        <Subtitle>{data[0].subTitle}</Subtitle>
        <GetSohbet>Get Sohbet</GetSohbet>
      </InnerContainer>
    </Container>
  );
}

export default Description;
