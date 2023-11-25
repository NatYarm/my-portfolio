import styled from 'styled-components';

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  height?: string;
};

const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => props.wrap};
  gap: ${(props) => props.gap};
  column-gap: ${(props) => props.columnGap};
  row-gap: ${(props) => props.rowGap};
  height: ${(props) => props.height};
`;

FlexWrapper.defaultProps = {
  direction: 'row',
  justify: 'flex-start',
  align: 'stretch',
  wrap: 'nowrap',
  height: '100%',
};

export default FlexWrapper;
