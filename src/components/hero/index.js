import Description from "./components/Description";
import Image from "./components/Image";
import { Main } from "./styles/index.styled";

function Hero() {
  return (
    <Main>
      <Description />
      <Image />
    </Main>
  );
}

export default Hero;
