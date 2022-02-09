import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const tokenExist = useSelector(authSelectors.getToken);
  return (
    <Route {...routeProps}>
      {tokenExist ? (
        isLoggedIn && tokenExist && children
      ) : (
        <Redirect to={redirectTo} />
      )}
    </Route>
  );
}
