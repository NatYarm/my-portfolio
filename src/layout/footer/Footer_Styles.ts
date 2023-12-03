import styled from 'styled-components';
import theme from '../../styles/Theme';

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  display: flex;
  padding: 50px 0;
  position: relative;
`;

const Copyright = styled.small`
  color: ${theme.colors.fontSecondary};
  font-size: 1.4rem;
`;

export const S = { Footer, Copyright };
