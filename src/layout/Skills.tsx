import styled from 'styled-components';
import FlexWrapper from '../components/FlexWrapper';
import Skill from '../components/Skill';
import SectionTitle from '../components/SectionTitle';

const skills = [
  'html',
  'css',
  'javascript',
  'typescript',
  'react',
  'redux',
  'styled components',
  'tailwind',
];

const Skills = () => {
  return (
    <SectionSkills>
      <SectionTitle>Skills</SectionTitle>
      <SectionDetails>Technologies I've used in my projects</SectionDetails>
      <FlexWrapper justify="space-between" wrap="wrap">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill} />
        ))}
      </FlexWrapper>
    </SectionSkills>
  );
};

const SectionSkills = styled.section`
  min-height: 100vh;
  text-align: center;
`;

const SectionDetails = styled.p`
  margin-bottom: 20px;
`;

export default Skills;
