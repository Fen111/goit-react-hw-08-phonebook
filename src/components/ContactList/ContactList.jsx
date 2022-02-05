import { useFetchContactsQuery } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactList/ContactListItem';
import s from './ContactList.module.css';
import { getFilter } from 'redux/selectors';

export default function ContactList() {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(getFilter);

  return (
    <>
      {contacts && (
        <ul className={s.list}>
          {contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase()),
            )
            .map(contact => (
              <ContactListItem key={contact.id} {...contact} />
            ))}
        </ul>
      )}
    </>
  );
}
