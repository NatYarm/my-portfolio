import styled from 'styled-components';

type TechStackPropType = {
  otherTechs?: string;
};

const TechStack = ({ otherTechs }: TechStackPropType) => {
  return (
    <StyledTechStack>TechStack: HTML, CSS, JS{otherTechs}</StyledTechStack>
  );
};

const StyledTechStack = styled.div`
  margin-bottom: 20px;
`;

export default TechStack;
