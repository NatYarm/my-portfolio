import styled from 'styled-components';
import { S } from './HeaderMenu_Styles';

const menuItems = ['home', 'skills', 'projects', 'contact'];

const Menu = () => {
  return (
    <S.MenuList>
      {menuItems.map((item, index) => (
        <ListItem key={index}>
          <S.NavLink activeClass="active" to={item} smooth={true} spy={true}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </S.NavLink>
        </ListItem>
      ))}
    </S.MenuList>
  );
};

const ListItem = styled.li`
  position: relative;
  z-index: 0;
`;

export default Menu;
