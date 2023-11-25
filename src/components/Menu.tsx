import styled from 'styled-components';
import theme from '../styles/Theme';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

const Menu = (props: { menuItems: Array<string> }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setShowMobileMenu((show) => !show);
  };

  return (
    <>
      <StyledMenu>
        <ul>
          {props.menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item}>{item}</Link>
            </li>
          ))}
        </ul>
        <button onClick={handleMobileMenu}>
          <FiMenu style={iconStyles} />
        </button>
      </StyledMenu>
      {showMobileMenu && (
        <MobileMenu
          menuItems={props.menuItems}
          handleMobileMenu={handleMobileMenu}
        />
      )}
    </>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;

    @media ${theme.media.tablet} {
      display: none;
    }
  }

  button {
    display: none;
    @media ${theme.media.tablet} {
      display: block;
    }
  }
`;

const Link = styled.a`
  color: ${theme.colors.fontSecondary};
  font-size: 2rem;

  &:hover {
    color: ${theme.colors.fontPrimary};
    font-weight: 500;
  }
`;

const iconStyles = {
  color: `${theme.colors.fontSecondary}`,
  width: '24px',
  height: '24px',
};

export default Menu;
