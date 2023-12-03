import { IoClose } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';
import Menu from './Menu';
import { S } from './HeaderMenu_Styles';
import { useState } from 'react';
import SocialLinks from '../../../components/SocialLinks';

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMenu((open) => !open);
  };

  return (
    <>
      <S.MobileMenu>
        <S.BurgerButton onClick={handleMobileMenu} isOpen={openMenu}>
          <FiMenu style={S.burgerIconStyles} />
        </S.BurgerButton>

        <S.MobileMenuPopup isOpen={openMenu} onClick={() => setOpenMenu(false)}>
          <S.CloseButton onClick={handleMobileMenu}>
            <IoClose style={S.closeIconStyles} />
          </S.CloseButton>
          <Menu />
          <SocialLinks />
        </S.MobileMenuPopup>
      </S.MobileMenu>
    </>
  );
};

export default MobileMenu;
