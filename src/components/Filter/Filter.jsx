import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import { Container, Typography, TextField } from '@mui/material';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <>
      <Container className={s.container}>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            marginTop: 2.5,
          }}
        >
          Contacts
        </Typography>
        <TextField
          className={s.input}
          sx={{
            marginTop: 2.5,
          }}
          type="text"
          value={value}
          label="Find contacts"
          variant="outlined"
          margin="normal"
          onChange={onChange}
        />
      </Container>
    </>
  );
}
