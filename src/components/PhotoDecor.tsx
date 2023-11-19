import styled from 'styled-components';
import theme from '../styles/Theme';

type PhotoDecorPropsType = {
  rotationDeg: string;
};

const PhotoDecor = styled.div<PhotoDecorPropsType>`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 270px;
    height: 270px;
    top: -8px;
    left: -14px;
    border: 1px solid ${theme.colors.secondaryBg};
    transform: rotate(${(props) => props.rotationDeg});
    position: absolute;
    z-index: -1;
  }
`;
export default PhotoDecor;
