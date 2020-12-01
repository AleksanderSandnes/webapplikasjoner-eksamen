import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import { useAuthContext } from '../context/AuthProvider';

import MainLayout from '../layouts/MainLayout';
import CreateEvent from '../pages/CreateEvent';
import EditEvent from '../pages/EditEvent';
import Events from '../pages/Events';
import Login from '../pages/Login';

const Dashboard = lazy(() => import('../pages/Dashboard'));

const AuthenticatedRoutes = ({ children, ...rest }) => {
  const { isLoggedIn, isLoading } = useAuthContext();

  return (
    <Route
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

const AdminRoutes = ({ children, ...rest }) => {
  const { isLoggedIn, isAdmin, isLoading } = useAuthContext();

  return (
    <Route
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
          <Route exact path="/">
            <Events />
          </Route>
          <AdminRoutes path="/dashboard">
            <Dashboard />
          </AdminRoutes>
          <AuthenticatedRoutes path="/events/create">
            <CreateEvent />
          </AuthenticatedRoutes>
          <AuthenticatedRoutes path="/events/:id">
            <EditEvent />
          </AuthenticatedRoutes>
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
