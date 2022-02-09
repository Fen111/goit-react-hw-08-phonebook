import React, { Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import { authOperations, authSelectors } from '../../redux/auth';

import Container from '../Container/Container';
import AppBar from 'components/AppBar';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView/RegisterView';
import LoginView from 'views/LoginView/LoginView';
import ContactsView from 'views/ContactsView';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      {isFetchingCurrentUser ? (
        <h1>Downloading...</h1>
      ) : (
        <>
          <Switch>
            <Suspense fallback={<h1>Downloading...</h1>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute exact path="/register" restricted>
                <RegisterView redirectTo="/contacts" />
              </PublicRoute>

              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}
