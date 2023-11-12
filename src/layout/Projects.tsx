import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import FlexWrapper from '../components/FlexWrapper';
import Project from '../components/Project';
import socialImg from '../assets/images/proj-1.jpg';
import timerImg from '../assets/images/proj-2.png';

const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <FlexWrapper justify="space-around">
        <Project
          title="Social Network"
          text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          src={socialImg}
        />
        <Project
          title="Timer"
          text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          src={timerImg}
        />
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
`;

export default Projects;
