import styled from 'styled-components';
import theme from '../../styles/Theme';
import Link from '../../components/Link';

const Project = styled.div`
  width: 340px;
  flex-grow: 1;
  background-color: ${theme.colors.ternaryBg};
  border-radius: 10px;

  @media ${theme.media.desktop} {
    max-width: 500px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
`;

const ProjectDetails = styled.div`
  padding: 20px;
`;
const Title = styled.h3`
  font-family: 'Rubik', sans-serif;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 1.2px;
`;

const Text = styled.p`
  margin: 20px 0;
`;

const TechStack = styled.p`
  font-size: 1.6rem;
  margin-bottom: 30px;
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
  Project,
  Image,
  ProjectDetails,
  Title,
  Text,
  TechStack,
  LinkWrapper,
  iconStyles,
};
