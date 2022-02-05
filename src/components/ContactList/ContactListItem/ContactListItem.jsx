import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';

import s from './ContactListItem.module.css';

export default function ContactListItem({ name, number, id }) {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <li className={s.listItem}>
      <p className={s.text}>
        {name}: {number}
      </p>
      <button
        className={s.itemButton}
        type="button"
        onClick={() => deleteContact(id)}
      />
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
