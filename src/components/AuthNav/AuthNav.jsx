import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        <Typography variant="h5" component="h5">
          Registration
        </Typography>
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        <Typography variant="h5" component="h5">
          Log in
        </Typography>
      </NavLink>
    </div>
  );
}
