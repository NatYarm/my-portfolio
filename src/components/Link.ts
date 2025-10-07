import styled, { css } from 'styled-components';
import theme from '../styles/Theme';

type LinkPropsType = {
  active?: boolean;
  color?: string;
  target?: string;
  rel?: string;
};

const Link = styled.a<LinkPropsType>`
  color: ${(props) => props.color || theme.colors.fontPrimary};
  font-weight: 400;
  font-size: 1.6rem;
  text-transform: uppercase;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    display: inline-block;
    width: 100%;
    height: 0;
    background-color: ${theme.colors.accentPrimary};
    position: absolute;
    bottom: 0;
    z-index: -1;

    ${(props) =>
      props.active &&
      css<{ active?: boolean }>`
        height: 5px;
        color: ${theme.colors.basicWhite};
      `}
  }

  &:hover {
    color: ${theme.colors.basicWhite};
    transition: ${theme.animations.transition};

    &::before {
      transition: ${theme.animations.transition};
      height: 3px;
    }
  }
`;

export default Link;
