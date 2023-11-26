import styled from 'styled-components';
import Icon from '../../components/Icon';

type SkillPropType = {
  iconId: string;
  title: string;
};

const Skill = ({ iconId, title }: SkillPropType) => {
  return (
    <div>
      <Icon iconId={iconId} />
      <SkillTitle>{title}</SkillTitle>
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
