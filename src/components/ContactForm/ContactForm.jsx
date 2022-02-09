import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  Typography,
  TextField,
  FormControl,
  Button,
} from '@mui/material';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const contacts = useSelector(contactsSelectors.getItems);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const formSubmitHandler = data => {
    if (contacts.find(({ name }) => name === data.name)) {
      toast.error(`${data.name} is already in contacts!`);
      return;
    } else if (contacts.find(({ number }) => number === data.number)) {
      toast.error(`${data.number} is already in contacts!`);
      return;
    }
    toast.success('Contact added');
    dispatch(contactsOperations.addContact({ name, number }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    resetForm();
    formSubmitHandler({ name, number });
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

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
          Phonebook
        </Typography>
        <FormControl
          className={s.form}
          onSubmit={handleSubmit}
          component="form"
          autoComplete="off"
          variant="outlined"
          margin="normal"
        >
          <TextField
            type="text"
            name="name"
            value={name}
            label="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            variant="outlined"
            margin="normal"
            required
            onChange={handleChange}
          />

          <TextField
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            label="Number"
            variant="outlined"
            margin="normal"
            onChange={handleChange}
          />

          <Button variant="contained" className={s.formButton} type="submit">
            Add contact
          </Button>
        </FormControl>
      </Container>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
