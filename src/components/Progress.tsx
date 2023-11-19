import styled from 'styled-components';

type ProgressPropsType = {
  value: number;
  label: string;
};

const Progress = ({ value, label }: ProgressPropsType) => {
  return (
    <ProgressWrapper>
      <Label>{label}</Label>
      <StyledProgress max={100} value={value} />
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 20px;
  font-size: 1.3rem;
`;

const StyledProgress = styled.progress`
  appearance: none;
  width: 250px;
  height: 5px;
  border-radius: 100px;

  &::-webkit-progress-bar {
    background: var(--color-grey-100);
    border-radius: 100px;
  }

  &::-webkit-progress-value {
    background-color: var(--color-brand-1);
    border-radius: 100px;
    /* border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    border-top-right-radius: 100px; */
  }
`;

export default Progress;
