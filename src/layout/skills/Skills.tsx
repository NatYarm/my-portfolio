import styled from 'styled-components';
import theme from '../../styles/Theme';
import Skill from './Skill';
import SectionTitle from '../../components/SectionTitle';
import Container from '../../components/Container';

const skills = [
  { iconId: 'html', title: 'html' },
  { iconId: 'css', title: 'css' },
  { iconId: 'javascript', title: 'javascript' },
  { iconId: 'typescript', title: 'typescript' },
  { iconId: 'react', title: 'react' },
  { iconId: 'redux', title: 'redux' },
  { iconId: 'styled-components', title: 'styled components' },
  { iconId: 'tailwind', title: 'tailwind' },
];

const Skills = () => {
  return (
    <SectionSkills id="skills">
      <Container>
        <SectionTitle>My Skills</SectionTitle>

        <SkillsWrapper>
          {skills.map((skill) => (
            <Skill
              iconId={skill.iconId}
              title={skill.title}
              key={skill.title}
            />
          ))}
        </SkillsWrapper>
      </Container>
    </SectionSkills>
  );
};

const SectionSkills = styled.section`
  text-align: center;
  background-color: ${theme.colors.secondaryBg};
  position: relative;
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
