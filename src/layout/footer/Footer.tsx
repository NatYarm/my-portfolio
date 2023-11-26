import logo from '../../assets/images/logo-grey.png';

import { BsEnvelopeFill } from 'react-icons/bs';
import { TbBrandGithubFilled } from 'react-icons/tb';
//import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import Logo from '../../components/Logo';
import FlexWrapper from '../../components/FlexWrapper';
import Container from '../../components/Container';
import { S } from './Footer_Styles';

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
    <S.Footer>
      <Container>
        <FlexWrapper justify="center" align="center" direction="column">
          <Logo logo={logo} />

          <S.SocialList>
            {socialLinks.map((item) => {
              const { SocialIcon, link } = item;
              return (
                <li key={link}>
                  <S.SocialLink href={link}>
                    <SocialIcon style={S.iconStyles} />
                  </S.SocialLink>
                </li>
              );
            })}
          </S.SocialList>
          <S.Copiright>
            &copy; {new Date().getFullYear()} - Natalia Yarmolinskaya
          </S.Copiright>

          {/* {Object.keys(socialLinks).map((link) => (
            <SocialItem key={link}>
            <SocialLink href={socialLinks[link]}>
            <Icon iconId={link} size="18" viewBox="0 0 30 30" />
            </SocialLink>
            </SocialItem>
          ))} */}
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};

export default Footer;
