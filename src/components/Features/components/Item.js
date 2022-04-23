import { Container } from "../styles/Item.styled";

import { bodyData } from "../Data";
import Card from "../../Card";

function createCard(data) {
  return (
    <Card image={data.image} title={data.title} subTitle={data.subTitle} />
  );
}

function Item() {
  return <Container>{bodyData.map(createCard)}</Container>;
}

export default Item;
