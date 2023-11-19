import styled from 'styled-components';
import FlexWrapper from '../components/FlexWrapper';
import Skill from '../components/Skill';
import SectionTitle from '../components/SectionTitle';
//import Progress from '../components/Progress';
import Container from '../components/Container';

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
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        {/* <SectionDetails>Technologies I've used in my projects</SectionDetails> */}
        <FlexWrapper justify="space-between" wrap="wrap">
          {skills.map((skill) => (
            <Skill skill={skill} key={skill} />
          ))}
        </FlexWrapper>

        {/* <SectionSubtitle>Languages I Speak</SectionSubtitle>
        <Progress value={90} label="English" />
        <Progress value={80} label="Dutch" />
        <Progress value={100} label="Russian" /> */}
      </Container>
    </SectionSkills>
  );
};

const SectionSkills = styled.section`
  text-align: center;
`;

// const SectionDetails = styled.p`
//   margin-bottom: 20px;
//   color: var(--color-grey-200);
// `;

// const SectionSubtitle = styled.h3`
//   margin: 50px 0 20px;
// `;

export default Skills;
