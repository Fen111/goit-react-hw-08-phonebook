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

import s from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Container className={s.container}>
        <FormControl
          component="form"
          sx={{
            marginTop: '30px',
          }}
          onSubmit={handleSubmit}
          autoComplete="off"
          variant="outlined"
          margin="normal"
        >
          <Typography variant="h2" component="h2">
            Log In
          </Typography>

          <TextField
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            id="outlined-email"
            label="Email"
            variant="outlined"
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
            Sign In
          </Button>
        </FormControl>
      </Container>
    </>
  );
}
