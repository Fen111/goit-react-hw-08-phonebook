import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Container from 'components/Container/Container';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [showPassword, setShowPassword] = useState(false);

  //   const handleClickShowPassword = () => setShowPassword(!showPassword);
  //   const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
      <Container>
        <form
          component="form"
          onSubmit={handleSubmit}
          autoComplete="off"
          variant="outlined"
          margin="normal"
        >
          <h2>Log In</h2>

          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            id="outlined-email"
            label="Email"
            variant="outlined"
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

          <button type="submit" variant="contained">
            Sign In
          </button>
        </form>
      </Container>
    </>
  );
}
