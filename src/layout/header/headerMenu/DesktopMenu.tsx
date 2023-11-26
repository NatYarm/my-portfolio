import Menu from './Menu';
import { S } from './HeaderMenu_Styles';

const DesktopMenu = (props: { menuItems: Array<string> }) => {
  return (
    <S.DesktopMenu>
      <Menu menuItems={props.menuItems} />
    </S.DesktopMenu>
  );
};

export default DesktopMenu;
