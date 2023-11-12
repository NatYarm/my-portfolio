import styled from 'styled-components';
import Icon from '../components/Icon';
import FlexWrapper from '../components/FlexWrapper';

type socialLinksOptions = {
  [key: string]: string;
};

const socialLinks: socialLinksOptions = {
  linkedIn: 'www.linkedin.com/in/natalia-yarmolinskaya-55054a29a',
  twitter: 'https://twitter.com/Nat_Yarm',
  github: 'https://github.com/NatYarm',
};

const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper justify="space-between" align="center">
        <Copiright>
          Natalia Yarmolinksaya - &copy; {new Date().getFullYear()}
        </Copiright>
        <SocialList>
          {Object.keys(socialLinks).map((link) => (
            <SocialItem key={link}>
              <SocialLink href={socialLinks[link]}>
                <Icon iconId={link} size="18" viewBox="0 0 30 30" />
              </SocialLink>
            </SocialItem>
          ))}
        </SocialList>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 20vh;
`;
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;
const SocialItem = styled.li``;
const SocialLink = styled.a``;
const Copiright = styled.small``;

export default Footer;
