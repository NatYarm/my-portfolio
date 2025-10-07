import styled from 'styled-components';
import { BsEnvelopeFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import theme from '../styles/Theme';

const socialLinks = [
  { SocialIcon: BsEnvelopeFill, link: 'mailto:tjoonkn@gmail.com' },
  { SocialIcon: FaGithub, link: 'https://github.com/NatYarm' },
  {
    SocialIcon: FaLinkedinIn,
    link: 'https://www.linkedin.com/in/natalia-yarmolinskaya',
  },
];

const SocialLinks = () => {
  return (
    <SocialList>
      {socialLinks.map((item) => {
        const { SocialIcon, link } = item;
        return (
          <li key={link}>
            <SocialLink href={link} target="_blank" rel="noopener noreferrer">
              <SocialIcon style={iconStyles} />
            </SocialLink>
          </li>
        );
      })}
    </SocialList>
  );
};

const SocialList = styled.ul`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
`;

const SocialLink = styled.a`
  color: ${theme.colors.fontSecondary};

  &:hover {
    color: ${theme.colors.basicWhite};
    transition: ${theme.animations.transition};
  }
`;

const iconStyles = {
  height: '2.4rem',
  width: '2.4rem',
};

export default SocialLinks;
