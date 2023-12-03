import SectionTitle from '../../components/SectionTitle';
import FlexWrapper from '../../components/FlexWrapper';
import Project from './Project';
import socialImg from '../../assets/images/proj-1.jpg';
import timerImg from '../../assets/images/proj-2.png';
import Container from '../../components/Container';
import { S } from './Projects_Styles_v2';

const projects = [
  {
    title: 'Social Network',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content.',
    src: socialImg,
    techs: 'TS, Styled Components',
  },
  {
    title: 'Timer',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    src: timerImg,
    techs: 'TS, Styled Components',
  },
];

const Projects = () => {
  return (
    <S.ProjectsSection id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper direction="column" align="center" rowGap="40px">
          {projects.map((p, idx) => (
            <Project
              title={p.title}
              text={p.text}
              src={p.src}
              techs={p.techs}
              index={idx}
              key={p.title}
            />
          ))}
        </FlexWrapper>
      </Container>
    </S.ProjectsSection>
  );
};

export default Projects;
