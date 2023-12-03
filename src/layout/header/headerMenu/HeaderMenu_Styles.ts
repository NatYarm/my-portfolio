import styled, { css } from 'styled-components';
import theme from '../../../styles/Theme';
import { Link } from 'react-scroll';

// Menu Styles

const MenuList = styled.ul``;

const NavLink = styled(Link)`
  color: ${theme.colors.fontSecondary};
  font-family: Rubik, sans-serif;
  font-weight: 500;
  font-size: 2rem;
  position: relative;
  cursor: pointer;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: auto;
    width: 0;
    height: 3px;
    z-index: 2;

    background-color: ${theme.colors.accentSecondary};
    transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1) 0.15s;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: auto;
    width: 0;
    height: 3px;
    z-index: 2;
    background-color: ${theme.colors.accentPrimary};
    transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1);
  }

  &:hover {
    &::before {
      width: 100%;
    }
    &::after {
      width: 100%;
    }
    color: ${theme.colors.basicWhite};
    transition: ${theme.animations.transition};
  }

  &.active {
    color: ${theme.colors.basicWhite};
  }
`;

//Mobile Menu Styles

const MobileMenu = styled.nav``;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.secondaryBg};
  opacity: 0.9;
  top: 0;
  left: 0;
  z-index: 999;
  transform: translateX(-100%);
  transition: all 0.5s ease-in-out;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateX(0);
    `};

  ${NavLink} {
    color: ${theme.colors.fontPrimary};
    font-size: 2.4rem;
  }

  ${MenuList} {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const closeIconStyles = {
  color: `${theme.colors.fontPrimary}`,
  width: '30px',
  height: '30px',
};

const burgerIconStyles = {
  color: `${theme.colors.fontPrimary}`,
  width: '30px',
  height: '30px',
};

const BurgerButton = styled.button<{ isOpen: boolean }>`
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: none;
    `};
`;

// Desktop Menu Styles

const DesktopMenu = styled.nav`
  ${MenuList} {
    display: flex;
    gap: 30px;
  }
`;

export const S = {
  MenuList,
  NavLink,
  MobileMenu,
  MobileMenuPopup,
  CloseButton,
  closeIconStyles,
  burgerIconStyles,
  BurgerButton,
  DesktopMenu,
};
