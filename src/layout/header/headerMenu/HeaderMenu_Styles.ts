import styled from 'styled-components';
import theme from '../../../styles/Theme';

//Mobile Menu
const MobileMenuPopup = styled.div`
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

const CloseButton = styled.button`
  position: fixed;
  height: 30px;
  width: 30px;
  top: 12px;
  right: 12px;
`;

const closeIconStyles = {
  color: ` ${theme.colors.fontPrimary}`,
  width: '24px',
  height: '24px',
};

const burgerIconStyles = {
  color: `${theme.colors.fontPrimary}`,
  width: '30px',
  height: '30px',
};

const BurgerButton = styled.button``;

// Desktop Menu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;

export const S = {
  MobileMenuPopup,
  CloseButton,
  closeIconStyles,
  burgerIconStyles,
  BurgerButton,
  DesktopMenu,
};
