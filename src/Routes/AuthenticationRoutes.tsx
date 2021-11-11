import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router';

import { Loadable, MinimalLayout } from '@Components';

const AuthLoginPage = Loadable(lazy(() => import('@Pages').then(({ LoginPage }) => ({ default: LoginPage }))));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes: RouteObject = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <AuthLoginPage />,
    },
    {
      path: '/',
      element: <Navigate to="/login" />,
    },
  ],
};

export default AuthenticationRoutes;
