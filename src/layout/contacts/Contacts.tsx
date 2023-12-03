import { BsEnvelope } from 'react-icons/bs';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { S } from './Contacts_Styles';

const Contacts = () => {
  return (
    <S.ContactsSection id="contact">
      <Container>
        <SectionTitle>Contact Me</SectionTitle>

        <S.Form>
          <S.Field placeholder="Name" />
          <S.Field placeholder="Subject" />
          <S.Field placeholder="Message" as="textarea" />

          <Button btnType="outlined" type="submit">
            <BsEnvelope />
            <S.BtnText>Send Message</S.BtnText>
          </Button>
        </S.Form>
      </Container>
    </S.ContactsSection>
  );
};

export default Contacts;
