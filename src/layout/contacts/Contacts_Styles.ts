import styled from 'styled-components';
import theme from '../../styles/Theme';

const ContactsSection = styled.section`
  background-color: ${theme.colors.secondaryBg};
  position: relative;
`;

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 150px;
  }
`;

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.ternaryBg};
  border: 1px solid ${theme.colors.borderColor};
  border-radius: 3px;
  padding: 7px 15px;
  font-family: 'Rubik', sans-serif;
  color: ${theme.colors.fontPrimary};

  &::placeholder {
    color: ${theme.colors.fontSecondary};
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.secondaryBg};
  }
`;

const BtnText = styled.span`
  margin-left: 10px;
`;

export const S = { ContactsSection, Form, Field, BtnText };
