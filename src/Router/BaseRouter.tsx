import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { DashboardPage, LoginPage } from '@Pages';
import { LogOnLayout, MainLayout } from '@Components';
import { PrivateRoute } from './PrivateRoute';
import { mainRoutes } from './mainRoutes';
import { AccountRedirect } from './AccountRedirect';

export const BaseRouter = () => (
  <Router>
    {/* <AccountRedirect /> */}
    <Switch>
      <Route exact path="/login" component={LogOnLayout(LoginPage)} />
      <Route exact path="/dashboard" component={MainLayout(DashboardPage)} />

      {/* {mainRoutes.map((route) => (
        <PrivateRoute key={route.path} {...route} />
      ))} */}

      <Route path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  </Router>
);
