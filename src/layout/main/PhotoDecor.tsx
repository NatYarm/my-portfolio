import styled from 'styled-components';

type PhotoDecorPropsType = {
  rotationDeg: string;
};

const PhotoDecor = styled.div<PhotoDecorPropsType>`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 28rem;
    height: 28rem;
    top: -0.5rem;
    left: -0.5rem;
    border: 1px solid #242630;
    transform: rotate(${(props) => props.rotationDeg});
    position: absolute;
    z-index: -1;
  }
`;
export default PhotoDecor;
