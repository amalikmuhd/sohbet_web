import { Container, Image, Title, Subtitle } from "./index.styled";

function Card(props) {
  return (
    <Container>
      <Image src={`./assets/${props.image}`} alt="" />
      <Title>{props.title}</Title>
      <Subtitle>{props.subTitle}</Subtitle>
    </Container>
  );
}

export default Card;
