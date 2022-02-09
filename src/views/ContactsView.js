import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Container } from '@mui/material';

export default function ContactsView() {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}
