import { HeaderStyled } from "./Header.styled";
import Container from "@/components/Section/Container/Container";
import Logo from "@/components/Logo/Logo";

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Logo />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
