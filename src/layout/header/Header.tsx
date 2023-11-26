import styled from 'styled-components';
import { useEffect, useState } from 'react';
import logo from '../../assets/images/ny.png';
import Logo from '../../components/Logo';
import Container from '../../components/Container';
import FlexWrapper from '../../components/FlexWrapper';
import DesktopMenu from './headerMenu/DesktopMenu';
import MobileMenu from './headerMenu/MobileMenu';

const items = ['Home', 'Skills', 'Projects', 'Contact'];

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const handleMobileMenu = () => {
    setShowMobileMenu((show) => !show);
  };

  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo logo={logo} />

          {width > breakpoint ? (
            <DesktopMenu menuItems={items} />
          ) : (
            <MobileMenu
              menuItems={items}
              handleMobileMenu={handleMobileMenu}
              isOpen={showMobileMenu}
            />
          )}
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  height: 100px;
  top: 0;
  left: 0;
  right: 0;
`;

export default Header;
