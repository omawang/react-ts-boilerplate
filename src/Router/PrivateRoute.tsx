import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAppSelector } from '@Redux';

export type PrivateRouteProps = RouteProps & {
  children: React.ReactNode;
};

export const PrivateRoute = (props: RouteProps) => {
  const { authToken } = useAppSelector((state) => state.account);

  if (!authToken) return <Redirect to="/login" />;
  return <Route {...props} />;
};
