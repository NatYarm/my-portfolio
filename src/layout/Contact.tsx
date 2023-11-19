import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { BsEnvelope } from 'react-icons/bs';

import Container from '../components/Container';
import theme from '../styles/Theme';

const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Contact Me</SectionTitle>

        <StyledForm>
          <Field placeholder="Name" />
          <Field placeholder="Subject" />
          <Field placeholder="Message" as="textarea" />

          <Button btnType="outlinedWhite" type="submit">
            <BsEnvelope />
            <BtnText>Send Message</BtnText>
          </Button>
        </StyledForm>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section``;

const StyledForm = styled.form`
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

export default Contact;
