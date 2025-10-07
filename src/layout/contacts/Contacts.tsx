import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsEnvelope } from 'react-icons/bs';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { emailjsConfig } from '../../config/emailjsConfig';
import { S } from './Contacts_Styles';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          name: formData.name,
          subject: formData.subject,
          message: formData.message,
        },
        emailjsConfig.publicKey
      );

      setStatus('success');
      setFormData({ name: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email failed to send:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <S.ContactsSection id="contact">
      <Container>
        <SectionTitle>Contact Me</SectionTitle>

        <S.Form onSubmit={handleSubmit}>
          <S.Field
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <S.Field
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <S.Field
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            as="textarea"
            required
          />

          {status === 'success' && (
            <S.SuccessMsg>✅ Message sent successfully!</S.SuccessMsg>
          )}

          {status === 'error' && (
            <S.ErrorMsg>
              ❌ Failed to send message. Please try again.
            </S.ErrorMsg>
          )}

          <Button btnType="outlined" type="submit">
            <BsEnvelope />
            <S.BtnText> {isLoading ? 'Sending...' : 'Send Message'}</S.BtnText>
          </Button>
        </S.Form>
      </Container>
    </S.ContactsSection>
  );
};

export default Contacts;
