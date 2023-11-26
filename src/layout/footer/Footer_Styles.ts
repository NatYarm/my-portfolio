import styled from 'styled-components';
import theme from '../../styles/Theme';

const Footer = styled.footer`
  display: flex;
  padding: 30px 0;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
  margin: 30px 0;
`;

const SocialLink = styled.a`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #a7a7a7;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${theme.colors.fontPrimary};
    transform: translateY(-4px);
    transition: 0.2s ease-in-out;
  }
`;
const Copiright = styled.small`
  color: ${theme.colors.fontSecondary};
  font-size: 1.2rem;
`;

const iconStyles = {
  fontSize: '1.8rem',
  color: `${theme.colors.primaryBg}`,
};

export const S = { Footer, SocialList, SocialLink, Copiright, iconStyles };
