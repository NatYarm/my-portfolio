import styled from 'styled-components';
import theme from '../../../styles/Theme';

type propsType = {
  color?: string;
};

const Menu = (props: { menuItems: Array<string>; color?: string }) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => (
        <li key={index}>
          <Link href={item} color={props.color}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Link = styled.a<propsType>`
  color: ${(props) => props.color || theme.colors.fontSecondary};
  font-family: 'Rubik', sans-serif;
  font-weight: 500;

  &:hover {
    color: ${theme.colors.basicWhite};
  }
`;

export default Menu;
