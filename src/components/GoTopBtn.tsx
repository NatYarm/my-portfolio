import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { IoArrowUpCircleOutline } from 'react-icons/io5';
import theme from '../styles/Theme';
import { useState, useEffect } from 'react';

const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 200 ? setShowBtn(true) : setShowBtn(false);
    });
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <IoArrowUpCircleOutline style={btnStyles} />
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
`;

const btnStyles = {
  color: `${theme.colors.accentPrimary}`,
  opacity: 0.95,
  height: '28px',
  width: '28px',
};

export default GoTopBtn;
