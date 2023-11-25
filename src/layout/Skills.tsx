import styled from 'styled-components';
import theme from '../styles/Theme';
import Skill from '../components/Skill';
import SectionTitle from '../components/SectionTitle';
import Container from '../components/Container';

const skills = [
  'html',
  'css',
  'javascript',
  'typescript',
  'react',
  'redux',
  'styled components',
  'bootstrap',
];

const Skills = () => {
  return (
    <SectionSkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>

        <SkillsWrapper>
          {skills.map((skill) => (
            <Skill skill={skill} key={skill} />
          ))}
        </SkillsWrapper>
      </Container>
    </SectionSkills>
  );
};

const SectionSkills = styled.section`
  text-align: center;
`;

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Skills;
