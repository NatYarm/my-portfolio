import styled from 'styled-components';
import theme from '../../styles/Theme';

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
  background-color: ${theme.colors.formColor};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;

  font-family: 'Poppins', sans-serif;
  color: ${theme.colors.fontPrimary};

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`;

const BtnText = styled.span`
  margin-left: 10px;
`;

export const S = { Form, Field, BtnText };
