import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Navigation from 'components/Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
