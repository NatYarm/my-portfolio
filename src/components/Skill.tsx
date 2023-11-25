import styled from 'styled-components';
import Icon from './Icon';

type SkillPropType = {
  skill: string;
};

const Skill = ({ skill }: SkillPropType) => {
  return (
    <div>
      <Icon iconId={skill} />
      <SkillTitle>{skill}</SkillTitle>
    </div>
  );
};

const SkillTitle = styled.h4`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 400;
  padding-top: 10px;
`;

export default Skill;
