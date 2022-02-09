import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Container from 'components/Container/Container';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [showPassword, setShowPassword] = useState(false);

  //   const handleClickShowPassword = () => setShowPassword(!showPassword);
  //   const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
            // type={showPassword ? 'text' : 'password'}
            type={password}
            name="password"
            value={password}
            onChange={handleChange}
            id="outlined-password-input"
            label="Password"
            autoComplete="current-password"
            margin="normal"
          />

          <button type="submit">Sign up</button>
        </form>
      </Container>
    </>
  );
}
