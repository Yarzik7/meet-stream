import { HeaderStyled, HeaderContainer } from "./Header.styled";
import Container from "@/components/Section/Container/Container";
import Logo from "@/components/Logo/Logo";
import CustomButton from "@/components/CustomButton/CustomButton";

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderContainer>
          <Logo />
          <CustomButton>Enter</CustomButton>
        </HeaderContainer>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
