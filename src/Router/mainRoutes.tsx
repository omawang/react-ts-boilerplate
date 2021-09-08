import { MainLayout } from '@Components';
import { DashboardPage } from '@Pages';

export const mainRoutes = [
  {
    exact: true,
    path: '/dashboard',
    component: MainLayout(DashboardPage),
  },
];
