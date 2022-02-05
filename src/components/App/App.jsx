import Container from '../Container/Container';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Section from 'components/Section';

export default function App() {
  return (
    <Container>
      <Section title="Phonebook" />
      <ContactForm />
      <Section title="Contacts" />
      <Filter />
      <ContactList />
    </Container>
  );
}
