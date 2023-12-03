import styled, { css } from 'styled-components';
import theme from '../../styles/Theme';

const ProjectsSection = styled.section`
  background-color: ${theme.colors.primaryBg};
  position: relative;
`;

const Project = styled.div<{ index: number }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 840px;
  width: 100%;
  background-color: ${theme.colors.ternaryBg};
  border-radius: 10px;

  ${(props) =>
    props.index % 2 === 0
      ? css<{ index: number }>`
          grid-template-areas: 'img details';
        `
      : css<{ index: number }>`
          grid-template-areas: 'details img ';
        `}

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    grid-template-areas:
      'img'
      'details';

    max-width: 500px;
    width: 100%;
  }
`;

const Image = styled.img<{ index: number }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-area: img;

  ${(props) =>
    props.index % 2 === 0
      ? css<{ index: number }>`
          border-radius: 10px 0px 0px 10px;
        `
      : css<{ index: number }>`
          border-radius: 0px 10px 10px 0px;
        `}

  @media ${theme.media.tablet} {
    border-radius: 10px 10px 0px 0px;
  }
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 30px;
  grid-area: details;
`;

const Title = styled.h3`
  font-family: 'Rubik', sans-serif;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 1.2px;
`;

const Text = styled.p`
  font-size: 1.6rem;
`;

const TechStack = styled.p`
  font-size: 1.6rem;
  margin-bottom: 30px;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const iconStyles = {
  marginRight: '5px',
};

export const S = {
  ProjectsSection,
  Project,
  Image,
  ProjectDetails,
  Title,
  Text,
  TechStack,
  LinkWrapper,
  iconStyles,
};
