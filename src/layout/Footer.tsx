import styled from 'styled-components';
import theme from '../styles/Theme';
import logo from '../assets/images/logo-grey.png';

import { BsEnvelopeFill } from 'react-icons/bs';
import { TbBrandGithubFilled } from 'react-icons/tb';
//import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import Logo from '../components/Logo';
import FlexWrapper from '../components/FlexWrapper';
import Container from '../components/Container';

// type socialLinksOptions = {
//   [key: string]: string;
// };

// const socialLinks: socialLinksOptions = {
//   linkedIn: 'www.linkedin.com/in/natalia-yarmolinskaya-55054a29a',
//   twitter: 'https://twitter.com/Nat_Yarm',
//   github: 'https://github.com/NatYarm',
// };

const socialLinks = [
  { SocialIcon: BsEnvelopeFill, link: 'mailto:yarmnat7@gmail.com' },
  { SocialIcon: TbBrandGithubFilled, link: 'https://github.com/NatYarm' },
  {
    SocialIcon: FaLinkedinIn,
    link: 'www.linkedin.com/in/natalia-yarmolinskaya-55054a29a',
  },
  { SocialIcon: FaTwitter, link: 'https://twitter.com/Nat_Yarm' },
];

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify="center" align="center" direction="column">
          <Logo logo={logo} />
          <SocialList>
            {socialLinks.map((item) => {
              const { SocialIcon, link } = item;
              return (
                <SocialItem key={link}>
                  <SocialLink href={link}>
                    <SocialIcon style={iconStyles} />
                  </SocialLink>
                </SocialItem>
              );
            })}
          </SocialList>
          <Copiright>
            &copy; {new Date().getFullYear()} - Natalia Yarmolinskaya
          </Copiright>
          {/* {Object.keys(socialLinks).map((link) => (
            <SocialItem key={link}>
            <SocialLink href={socialLinks[link]}>
            <Icon iconId={link} size="18" viewBox="0 0 30 30" />
            </SocialLink>
            </SocialItem>
          ))} */}
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  padding: 30px 0;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
  margin: 30px 0;
`;
const SocialItem = styled.li``;
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

export default Footer;
