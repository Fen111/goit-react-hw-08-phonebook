import { useState } from 'react';
import {
  useFetchContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = event => {
    const { name, value } = event.target;
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
    addContact({ name, number });
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
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>

        <button className={s.formButton} type="submit">
          Add contact
        </button>
      </form>
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
