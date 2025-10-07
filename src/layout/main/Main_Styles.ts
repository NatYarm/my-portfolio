import styled from 'styled-components';

const Main = styled.section`
  padding-top: 100px;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
`;

const PhotoContainer = styled.div`
  margin: 0 auto;
  padding: 20px 0;
`;

const MainDetails = styled.div`
  max-width: 600px;
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

export const S = { Main, PhotoContainer, MainDetails, Title, Name, MainText };
