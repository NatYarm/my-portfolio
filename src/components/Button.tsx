import styled, { css } from 'styled-components';
import theme from '../styles/Theme';

type StyledBtnPropsType = {
  color?: string;
  fontSize?: string;
  btnType: 'primary' | 'outlined' | 'outlinedWhite';
};

const btnTypes = {
  primary: css<StyledBtnPropsType>`
    color: ${theme.colors.basicWhite};
    background-color: ${theme.colors.accentPrimary};

    &:hover {
      background-color: #0999d8;
    }
  `,

  outlined: css<StyledBtnPropsType>`
    color: ${theme.colors.accentPrimary};
    border: 2px solid ${theme.colors.accentPrimary};
    background-color: transparent;

    &:hover {
      background-color: ${theme.colors.accentPrimary};
      border-color: ${theme.colors.accentPrimary};
      color: ${theme.colors.basicWhite};
    }
  `,

  outlinedWhite: css<StyledBtnPropsType>`
    color: var(--color-grey-100);
    border: 2px solid var(--color-grey-100);
    background-color: transparent;

    &:hover {
      background-color: ${theme.colors.fontPrimary};
      border-color: ${theme.colors.fontPrimary};
      color: #000;
    }
  `,
};

const Button = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 30px;
  text-align: center;
  padding: 10px 20px;
  font-family: 'Roboto Mono';
  font-size: ${(props) => props.fontSize || '1.5rem'};

  &:hover {
    transition: background-color 0.2s ease-in-out;
  }

  &:focus-visible {
    outline: 1px solid ${(props) => props.color};
  }

  ${(props) => btnTypes[props.btnType]};
`;

Button.defaultProps = { btnType: 'primary' };

export default Button;
