import styled from 'styled-components';

const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => (
          <li key={index}>
            <Link href="/">{item}</Link>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;

const Link = styled.a`
  color: var(--color-grey-200);
`;

export default Menu;
