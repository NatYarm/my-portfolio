import { BsEnvelope } from 'react-icons/bs';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { S } from './Contact_Styles';

const Contact = () => {
  return (
    <section>
      <Container>
        <SectionTitle>Contact Me</SectionTitle>

        <S.Form>
          <S.Field placeholder="Name" />
          <S.Field placeholder="Subject" />
          <S.Field placeholder="Message" as="textarea" />

          <Button btnType="outlinedWhite" type="submit">
            <BsEnvelope />
            <S.BtnText>Send Message</S.BtnText>
          </Button>
        </S.Form>
      </Container>
    </section>
  );
};

export default Contact;
