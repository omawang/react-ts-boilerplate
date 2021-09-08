import { useCallback } from 'react';
import { Button } from '@material-ui/core';
import { logout, useAppDispatch } from 'src/Redux';

export const DashboardPage = () => {
  const dispatch = useAppDispatch();

  const onLogout = useCallback(async (e) => {
    e.preventDefault();
    dispatch(logout(null));
  }, []);

  return (
    <div>
      DashboardPage
      <br />
      <Button variant="contained" color="primary" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};
