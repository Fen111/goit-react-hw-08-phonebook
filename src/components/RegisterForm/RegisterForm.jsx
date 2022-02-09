import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Container from 'components/Container/Container';

export default function RegisterForm() {
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
      <Container>
        <form
          component="form"
          onSubmit={handleSubmit}
          autoComplete="off"
          variant="outlined"
          margin="normal"
        >
          <h2>Registration</h2>

          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            id="outlined-name"
            label="Name"
            variant="outlined"
            margin="normal"
          />

          <input
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

          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            id="outlined-password-input"
            label="Password"
            autoComplete="current-password"
            margin="normal"
          />

          <button type="submit" variant="contained">
            Sign up
          </button>
        </form>
      </Container>
    </>
  );
}
