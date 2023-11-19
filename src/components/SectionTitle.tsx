import styled from 'styled-components';
import theme from '../styles/Theme';

const SectionTitle = styled.h2`
  font-family: 'Poppins';
  font-size: 2.8rem;
  letter-spacing: 1.2px;
  text-align: center;
  margin-bottom: 90px;

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 55px;
    height: 2px;
    background-color: ${theme.colors.accentPrimary};

    position: absolute;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
  }
`;

export default SectionTitle;
