/* eslint-disable react/prop-types */
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import { useAuthContext } from '../context/AuthProvider';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login';
import OfficePage from '../pages/OfficePage';
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';
import Articles from '../pages/Articles';

import ArticleDetails from '../pages/ArticleDetails';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line no-unused-vars
const AuthenticatedRoutes = ({ children, ...rest }) => {
  const { isLoggedIn, isLoading } = useAuthContext();

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) =>
        isLoggedIn && !isLoading ? (
          <div>{children}</div>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line no-unused-vars
const AdminRoutes = ({ children, ...rest }) => {
  const { isLoggedIn, isAdmin, isLoading } = useAuthContext();

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={() => isLoggedIn && isAdmin && !isLoading && children}
    />
  );
};

const Routes = () => (
  <Router>
    <MainLayout>
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route exact path="/homepage">
            <HomePage />
          </Route>
          <Route exact path="/offices">
            <OfficePage />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/articleDetails">
            <ArticleDetails />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </MainLayout>
  </Router>
);

export default Routes;
