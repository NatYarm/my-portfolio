import styled from 'styled-components';
import theme from '../../styles/Theme';

const Project = styled.div`
  width: 340px;
  flex-grow: 1;
  background-color: ${theme.colors.secondaryBg};
  border-radius: 20px;

  &:hover {
    transform: scale(1.01);
    transition: 0.3s;
  }

  @media ${theme.media.desktop} {
    max-width: 500px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
`;

const ProjectDetails = styled.div`
  padding: 20px;
`;
const Title = styled.h3`
  font-family: 'Rubik', sans-serif;
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: 1.2px;
`;
const Text = styled.p`
  margin: 20px 0;
`;

const TechStack = styled.p`
  font-size: 1.6rem;
  margin-bottom: 20px;
`;

const Link = styled.a`
  margin-right: 30px;
`;

const LinkText = styled.span`
  display: inline-block;
  padding-left: 5px;
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 5px;
    }
  }

  &::before {
    content: '';
    display: inline-block;
    width: 90%;
    background-color: ${theme.colors.accentPrimary};
    position: absolute;
    left: 55%;
    bottom: -1px;
    transform: translateX(-50%);
    z-index: -1;
  }
`;

export const S = {
  Project,
  Image,
  ProjectDetails,
  Title,
  Text,
  TechStack,
  Link,
  LinkText,
};