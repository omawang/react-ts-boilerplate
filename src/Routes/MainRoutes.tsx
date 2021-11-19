import { lazy } from 'react';
import { RouteObject } from 'react-router';

import { Loadable, MainLayout } from '@Components';
import RequireAuth from './RequireAuth';

const MainDashboardPage = Loadable(lazy(() => import('@Pages').then(({ DashboardPage }) => ({ default: DashboardPage }))));
const MainAnggotaPrelistPage = Loadable(lazy(() => import('@Pages').then(({ AnggotaPrelistPage }) => ({ default: AnggotaPrelistPage }))));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const MainRoutes: RouteObject = {
  path: '/',
  element: (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  ),
  children: [
    {
      path: '/dashboard',
      element: <MainDashboardPage />,
    },
    {
      path: '/anggota/prelist',
      element: <MainAnggotaPrelistPage />,
    },
  ],
};

export default MainRoutes;
