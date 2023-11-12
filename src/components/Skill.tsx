import styled from 'styled-components';
import Icon from './Icon';

type SkillPropType = {
  skill: string;
};

const Skill = ({ skill }: SkillPropType) => {
  return (
    <StyledSkill>
      <Icon iconId={skill} />
      <SkillTitle>{skill}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 22%;
  margin: 10px;
  text-align: center;
  //background-color: #676666;
`;
const SkillTitle = styled.h4`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
`;

export default Skill;
