import styled from 'styled-components';
import Logo from '../components/Logo';
import Menu from '../components/Menu';

const items = ['Home', 'Skills', 'Projects', 'Contact'];

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={items} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 100px;
`;

export default Header;
