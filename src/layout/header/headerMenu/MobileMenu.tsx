import { IoClose } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';
import Menu from './Menu';
import { S } from './HeaderMenu_Styles';

type propsType = {
  menuItems: Array<string>;
  handleMobileMenu: VoidFunction;
  isOpen: boolean;
};

const MobileMenu = ({ menuItems, handleMobileMenu, isOpen }: propsType) => {
  return (
    <nav>
      <S.BurgerButton onClick={handleMobileMenu}>
        <FiMenu style={S.burgerIconStyles} />
      </S.BurgerButton>
      {isOpen && (
        <S.MobileMenuPopup>
          <S.CloseButton onClick={handleMobileMenu}>
            <IoClose style={S.closeIconStyles} />
          </S.CloseButton>
          <Menu menuItems={menuItems} color="#d9d9d9" />
        </S.MobileMenuPopup>
      )}
    </nav>
  );
};

export default MobileMenu;
