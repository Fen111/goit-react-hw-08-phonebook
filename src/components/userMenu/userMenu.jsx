import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { IconButton, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          padding: 1.5,
          marginRight: 2,
        }}
      >
        Welcome, {name}
      </Typography>
      <IconButton
        type="button"
        aria-label="logout"
        sx={{
          background: 'transparent',
        }}
        onClick={() => dispatch(authOperations.logOut())}
      >
        <LogoutIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
