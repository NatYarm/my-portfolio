import FlexWrapper from '../../components/FlexWrapper';
import Button from '../../components/Button';
import Container from '../../components/Container';
import MainPhoto from './MainPhoto';
import { S } from './Main_Styles';

const Main = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Natalia_Tjoonk_Eng.pdf';
    link.download = 'Natalia_Tjoonk_Eng.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <S.Main id="home">
      <Container>
        <FlexWrapper
          align="center"
          wrap="wrap-reverse"
          columnGap="60px"
          rowGap="120px"
        >
          <S.MainDetails>
            <S.Title>Web Developer</S.Title>
            <S.Name>Natalia Tjoonk | Yarmolinskaya</S.Name>
            <S.MainText>
              I’m a motivated front-end developer with hands-on experience in
              React, Next.js, TypeScript, and Redux. I enjoy building
              responsive, user-friendly interfaces and continuously improving my
              skills through projects and collaboration.
            </S.MainText>

            <FlexWrapper gap="20px">
              <Button btnType="outlined" onClick={handleDownloadCV}>
                Download CV
              </Button>
              <Button btnType="outlinedWhite" onClick={handleContactClick}>
                Contact
              </Button>
            </FlexWrapper>
          </S.MainDetails>
          <S.PhotoContainer>
            <MainPhoto />
          </S.PhotoContainer>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};

export default Main;
