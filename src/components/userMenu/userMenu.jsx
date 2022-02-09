import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <>
      <h3>Welcome, {name}</h3>
      <button
        type="button"
        aria-label="logout"
        color="secondary"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </>
  );
}
