import styled from 'styled-components';
import photo from '../assets/images/img1.jpeg';
import FlexWrapper from '../components/FlexWrapper';

const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="space-around">
        <div>
          <Title>Web Developer</Title>
          <Name>Natalia Yarmolinskaya</Name>
          <p>I'm based in Emmen, Netherlands</p>
        </div>
        <Photo src={photo} alt="Natalia" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  color: var(--color-grey-100);
  object-fit: cover;
`;

const Name = styled.h2``;

const Photo = styled.img`
  height: 200px;
  border-radius: 50%;
  border: 12px solid transparent;

  background: linear-gradient(
      0deg,
      rgba(231, 15, 170, 1) 13%,
      rgba(19, 176, 245, 1) 100%
    )
    border-box;
`;

export default Main;
