import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  contactsOperations,
  contactsSelectors,
  contactsActions,
} from 'redux/contacts';
import ContactListItem from 'components/ContactList/ContactListItem';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (contacts.length === 0) dispatch(contactsActions.changeFilter(''));
  }, [contacts.length, dispatch]);
  return (
    <>
      {contacts && (
        <ul className={s.list}>
          {contacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </>
  );
}
