import styled from 'styled-components';
import FlexWrapper from '../components/FlexWrapper';
import Button from '../components/Button';
import Container from '../components/Container';
import MainPhoto from '../components/MainPhoto';

const Main = () => {
  return (
    <StyledMain id="Home">
      <Container>
        <FlexWrapper
          align="center"
          wrap="wrap-reverse"
          columnGap="130px"
          rowGap="130px"
        >
          <MainDetails>
            <Title>Web Developer</Title>
            <Name>Natalia Yarmolinskaya</Name>
            <MainText>
              I'm a front-end developer living in Emmen, Netherlands. I make web
              applications with React and TypeScript.
            </MainText>

            <FlexWrapper gap="20px">
              <Button btnType="outlined">Download CV</Button>
              <Button btnType="outlinedWhite">Contact</Button>
            </FlexWrapper>
          </MainDetails>
          <PhotoContainer>
            <MainPhoto />
          </PhotoContainer>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  padding-top: 100px;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
`;

const PhotoContainer = styled.div`
  margin: 0 auto;
  padding: 30px 0;
`;

const MainDetails = styled.div`
  max-width: 550px;
  width: 100%;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: 1.4px;
  color: var(--color-grey-100);
`;

const Name = styled.h2`
  background: -webkit-linear-gradient(
    2deg,
    rgba(231, 15, 170, 1) 0%,
    rgba(19, 176, 245, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 5rem;
  line-height: 1.1;
  margin: 20px 0;
`;

const MainText = styled.p`
  margin-bottom: 30px;
  line-height: 1.6;
`;

export default Main;
