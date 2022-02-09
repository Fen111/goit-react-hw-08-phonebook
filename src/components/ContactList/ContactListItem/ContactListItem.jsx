import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import s from './ContactListItem.module.css';

export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();

  const deleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <div className={s.container}>
      <ListItem className={s.listItem}>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={number} />
      </ListItem>
      <button
        className={s.itemButton}
        type="button"
        onClick={() => deleteContact(id)}
      />
    </div>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
