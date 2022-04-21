import Description from "./components/Description";
import Header from "./components/Header";
import Image from "./components/Image";
import { Section, HeaderSection, BodyStyled } from "./styles/index.styled";

function WhySohbet() {
  return (
    <Section>
      <HeaderSection>
        <Header />
      </HeaderSection>
      <BodyStyled>
        <Description />
        <Image />
      </BodyStyled>
    </Section>
  );
}

export default WhySohbet;
