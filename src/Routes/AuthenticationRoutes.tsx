import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { Loadable, MinimalLayout } from '@Components';

const AuthLoginPage = Loadable(lazy(() => import('@Pages').then(({ LoginPage }) => ({ default: LoginPage }))));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes: RouteObject = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      index: true,
      element: <Navigate to="/login" />,
    },
    {
      path: '/login',
      element: <AuthLoginPage />,
    },
  ],
};

export default AuthenticationRoutes;
