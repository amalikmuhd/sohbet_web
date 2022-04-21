import { Title, Subtitle } from "../styles/Header.styled";
import { headerData } from "../Data";
function Header() {
  return (
    <>
      <Title>{headerData[0].title}</Title>
      <Subtitle>{headerData[0].subTitle}</Subtitle>
    </>
  );
}

export default Header;
