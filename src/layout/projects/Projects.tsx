import SectionTitle from '../../components/SectionTitle';
import FlexWrapper from '../../components/FlexWrapper';
import Project from './Project';
import socialImg from '../../assets/images/proj-1.jpg';
import timerImg from '../../assets/images/proj-2.png';
import Container from '../../components/Container';

const projects = [
  {
    title: 'Social Network',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
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
    <section id="Projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper
          justify="space-between"
          wrap="wrap"
          rowGap="30px"
          columnGap="20px"
        >
          {projects.map((p) => (
            <Project
              title={p.title}
              text={p.text}
              src={p.src}
              techs={p.techs}
              key={p.title}
            />
          ))}
        </FlexWrapper>
      </Container>
    </section>
  );
};

export default Projects;
