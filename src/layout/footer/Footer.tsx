import FlexWrapper from '../../components/FlexWrapper';
import Container from '../../components/Container';
import { S } from './Footer_Styles';
import SocialLinks from '../../components/SocialLinks';

const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper justify="center" align="center" direction="column">
          <SocialLinks />
          <S.Copyright>
            &copy; {new Date().getFullYear()} - Natalia Yarmolinskaya
          </S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};

export default Footer;
