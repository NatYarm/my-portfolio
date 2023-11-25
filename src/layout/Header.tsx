import styled from 'styled-components';
import logo from '../assets/images/ny.png';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Container from '../components/Container';
import FlexWrapper from '../components/FlexWrapper';

const items = ['Home', 'Skills', 'Projects', 'Contact'];

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo logo={logo} />
          <Menu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  height: 100px;
`;

export default Header;
