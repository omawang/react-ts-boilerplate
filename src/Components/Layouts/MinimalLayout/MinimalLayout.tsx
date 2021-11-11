import { FC } from 'react';
import { Outlet } from 'react-router-dom';

// project imports

// ==============================|| MINIMAL LAYOUT ||============================== //

export const MinimalLayout: FC = () => (
  <>
    <Outlet />
  </>
);
