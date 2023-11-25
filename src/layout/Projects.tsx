import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import FlexWrapper from '../components/FlexWrapper';
import Project from '../components/Project';
import socialImg from '../assets/images/proj-1.jpg';
import timerImg from '../assets/images/proj-2.png';
import Container from '../components/Container';

const Projects = () => {
  return (
    <StyledProjects id="Projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper
          justify="space-between"
          wrap="wrap"
          rowGap="30px"
          columnGap="20px"
        >
          <Project
            title="Social Network"
            text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            src={socialImg}
            techs="TS, Styled Components"
          />
          <Project
            title="Timer"
            text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            src={timerImg}
            techs="TS, Styled Components"
          />
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;

export default Projects;
