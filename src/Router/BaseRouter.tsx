import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { LoginPage } from '@Pages';
import { PrivateRoute } from './PrivateRoute';
import { mainRoutes } from './mainRoutes';

export const BaseRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={LoginPage} />

      {mainRoutes.map((route) => (
        <PrivateRoute {...route} />
      ))}

      <Route path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  </Router>
);
