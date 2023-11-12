import styled from 'styled-components';
import Icon from './Icon';
import FlexWrapper from './FlexWrapper';
import TechStack from './TechStack';

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
};

const Project = ({ title, text, src }: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={src} alt={title}></Image>
      <ProjectDetails>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <TechStack otherTechs=", React, Styled Components" />
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
  max-width: 350px;
  width: 100%;
  background-color: var(--color-grey-800);
  border-radius: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
`;

const ProjectDetails = styled.div`
  padding: 0 20px 20px 20px;
`;
const Title = styled.h3``;
const Text = styled.p``;

const Link = styled.a`
  margin-right: 30px;
  color: var(--color-grey-100);
`;

const LinkText = styled.span`
  margin-left: 5px;
`;

export default Project;
