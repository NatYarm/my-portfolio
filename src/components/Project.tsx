import styled from 'styled-components';
import Icon from './Icon';
import FlexWrapper from './FlexWrapper';
import theme from '../styles/Theme';

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
  techs: string;
};

const Project = ({ title, text, src, techs }: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={src} alt={title}></Image>
      <ProjectDetails>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <TechStack>
          <b>Tech stack:</b> HTML, CSS, {techs}
        </TechStack>
        <FlexWrapper>
          <Link href="#">
            <FlexWrapper align="center">
              <Icon iconId="link" size="18px" viewBox="0 0 24 24" />
              <LinkText>demo</LinkText>
            </FlexWrapper>
          </Link>

          <Link href="#">
            <FlexWrapper align="center">
              <Icon iconId="github-repo" size="16px" viewBox="0 0 24 24" />
              <LinkText>code</LinkText>
            </FlexWrapper>
          </Link>
        </FlexWrapper>
      </ProjectDetails>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  max-width: 370px;
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border-radius: 20px;
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
  font-family: 'Poppins';
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: 1.2px;
`;
const Text = styled.p`
  margin: 20px 0;
`;

const TechStack = styled.p`
  font-size: 1.4rem;
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

export default Project;
