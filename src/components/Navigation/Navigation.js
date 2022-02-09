import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Typography } from '@mui/material';

import s from './Navigation.module.css';
import Container from 'components/Container/Container';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={s.container}>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        <Typography variant="h5" component="h5">
          Home
        </Typography>
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          <Typography variant="h5" component="h5">
            Contacts
          </Typography>
        </NavLink>
      )}
    </div>
  );
}
