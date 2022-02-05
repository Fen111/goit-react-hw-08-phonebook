import { useFetchContactsQuery } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactList/ContactListItem';
import s from './ContactList.module.css';
import { getFilter } from 'redux/selectors';

export default function ContactList() {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      {contacts && (
        <ul className={s.list}>
          {filteredContacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </>
  );
}
