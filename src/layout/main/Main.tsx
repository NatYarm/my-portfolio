import FlexWrapper from '../../components/FlexWrapper';
import Button from '../../components/Button';
import Container from '../../components/Container';
import MainPhoto from './MainPhoto';
import { S } from './Main_Styles';

const Main = () => {
  return (
    <S.Main id="home">
      <Container>
        <FlexWrapper
          align="center"
          wrap="wrap-reverse"
          columnGap="80px"
          rowGap="120px"
        >
          <S.MainDetails>
            <S.Title>Web Developer</S.Title>
            <S.Name>Natalia Yarmolinskaya</S.Name>
            <S.MainText>
              I'm a front-end developer living in Emmen, Netherlands. I make web
              applications with React and TypeScript.
            </S.MainText>

            <FlexWrapper gap="20px">
              <Button btnType="outlined">Download CV</Button>
              <Button btnType="outlinedWhite">Contact</Button>
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
