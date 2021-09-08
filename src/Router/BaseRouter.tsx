import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage } from '@Pages';
import { LogOnLayout } from '@Components';
import { PrivateRoute } from './PrivateRoute';
import { mainRoutes } from './mainRoutes';

export const BaseRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={LogOnLayout(LoginPage)} />

      {mainRoutes.map((route) => (
        <PrivateRoute key={route.path} {...route} />
      ))}

      <Route path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  </Router>
);
