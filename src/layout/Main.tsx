import styled from 'styled-components';
import FlexWrapper from '../components/FlexWrapper';
import Button from '../components/Button';
import Container from '../components/Container';
import MainPhoto from '../components/MainPhoto';

const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper
          align="center"
          justify="space-between"
          wrap="wrap"
          gap="30px"
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

          <MainPhoto />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
`;

const MainDetails = styled.div`
  max-width: 450px;
  width: 100%;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-family: 'Poppins';
  font-size: 2.2rem;
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
  font-size: 1.8rem;
  line-height: 1.6;
`;

export default Main;
