import styled from 'styled-components';
import theme from '../styles/Theme';
import { IoClose } from 'react-icons/io5';

const MobileMenu = (props: {
  menuItems: Array<string>;
  handleMobileMenu: VoidFunction;
}) => {
  return (
    <StyledMobileMenu>
      <CloseButton onClick={props.handleMobileMenu}>
        <IoClose style={iconStyles} />
      </CloseButton>
      <ul>
        {props.menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item}>{item}</Link>
          </li>
        ))}
      </ul>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  position: fixed;
  width: 200px;
  height: 100vh;
  background-color: ${theme.colors.secondaryBg};
  top: 0;
  right: 0;
  z-index: 999;

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`;

const Link = styled.a`
  color: ${theme.colors.fontSecondary};
  font-size: 1.8rem;

  &:hover {
    color: ${theme.colors.fontPrimary};
  }
`;

const CloseButton = styled.button`
  position: fixed;
  height: 50px;
  width: 50px;
  top: 8px;
  right: 8px;
`;

const iconStyles = {
  color: ` ${theme.colors.fontSecondary}`,
  width: '24px',
  height: '24px',
};

export default MobileMenu;
