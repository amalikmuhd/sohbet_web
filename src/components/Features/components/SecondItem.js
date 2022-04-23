import { Container } from "../styles/Item.styled";

import { bodyDataTwo } from "../Data";
import Card from "../../Card";

function createCard(data) {
  return (
    <Card image={data.image} title={data.title} subTitle={data.subTitle} />
  );
}

function SecondItem() {
  return <Container>{bodyDataTwo.map(createCard)}</Container>;
}

export default SecondItem;
