import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import FlexWrapper from '../components/FlexWrapper';
import Button from '../components/Button';
import Icon from '../components/Icon';

const Contact = () => {
  return (
    <StyledContact>
      <SectionTitle>Contact Me</SectionTitle>

      <FlexWrapper justify="center">
        <Button>
          <FlexWrapper align="center">
            <Icon iconId="email" viewBox="0 0 18 18" size="18" />
            <BtnText>Send Message</BtnText>
          </FlexWrapper>
        </Button>
      </FlexWrapper>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  height: 80vh;
`;
const BtnText = styled.span`
  margin-left: 10px;
`;

export default Contact;
