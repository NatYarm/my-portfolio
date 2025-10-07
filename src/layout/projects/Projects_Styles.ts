import styled from 'styled-components';
import theme from '../../styles/Theme';
import Link from '../../components/Link';

const ProjectsSection = styled.section`
  background-color: ${theme.colors.primaryBg};
  position: relative;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;

  @media ${theme.media.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
    justify-content: center;
  }

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ProjectCard = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${theme.colors.ternaryBg};
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img<{ imageType?: 'screenshot' | 'logo' }>`
  width: 100%;
  height: 260px;
  object-fit: ${(props) => (props.imageType === 'logo' ? 'contain' : 'cover')};
  background-color: ${(props) =>
    props.imageType === 'logo' ? theme.colors.secondaryBg : 'transparent'};
  border-radius: 10px 10px 0px 0px;
  padding: ${(props) => (props.imageType === 'logo' ? '20px' : '0')};
`;

const ProjectDetails = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: calc(100% - 260px);
`;

const Title = styled.h3`
  font-family: 'Rubik', sans-serif;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 1.2px;

  @media ${theme.media.tablet} {
    font-size: 2.8rem;
  }

  @media ${theme.media.mobile} {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  margin: 20px 0;
  font-size: 1.8rem;
  flex-grow: 1;
  line-height: 1.4;
`;

const TechStack = styled.p`
  font-size: 1.6rem;
  margin-bottom: 20px;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;

  ${Link} {
    color: ${theme.colors.fontPrimary};
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.6rem;
    letter-spacing: 1.1px;
  }
`;

const iconStyles = {
  marginRight: '5px',
};

export const S = {
  ProjectsSection,
  ProjectsGrid,
  ProjectCard,
  Image,
  ProjectDetails,
  Title,
  Text,
  TechStack,
  LinkWrapper,
  iconStyles,
};
