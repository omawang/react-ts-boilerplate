import { lazy } from 'react';
import { RouteObject } from 'react-router';

import { Loadable, MainLayout } from '@Components';

const MainDashboardPage = Loadable(lazy(() => import('@Pages').then(({ DashboardPage }) => ({ default: DashboardPage }))));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const MainRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/dashboard',
      element: <MainDashboardPage />,
    },
  ],
};

export default MainRoutes;
