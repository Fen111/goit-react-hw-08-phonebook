import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import {
  Container,
  Typography,
  TextField,
  FormControl,
  Button,
} from '@mui/material';
import s from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Container className={s.container}>
        <FormControl
          className={s.form}
          component="form"
          onSubmit={handleSubmit}
          sx={{
            marginTop: '30px',
          }}
          autoComplete="off"
          variant="outlined"
          margin="normal"
        >
          <Typography variant="h2" component="h2">
            Registration
          </Typography>

          <TextField
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            id="outlined-name"
            label="Name"
            variant="outlined"
            margin="normal"
          />

          <TextField
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            id="outlined-email"
            label="Email"
            variant="outlined"
            helpertext="We'll never share your email."
            margin="normal"
          />

          <TextField
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            id="outlined-password-input"
            label="Password"
            autoComplete="current-password"
            margin="normal"
          />

          <Button type="submit" variant="contained" className={s.button}>
            Sign up
          </Button>
        </FormControl>
      </Container>
    </>
  );
}
