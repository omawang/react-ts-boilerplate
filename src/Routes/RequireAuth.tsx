import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { fetchProfileThunk, setAuthToken, useAppDispatch, useAppSelector } from '@Redux';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { authToken, profile } = useAppSelector((state) => state.account);
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!profile && token) {
        dispatch(setAuthToken(token));
        await dispatch(fetchProfileThunk(token));
      }
      setInitialized(true);
    };

    fetchProfile();
  }, [profile]);

  if (!initialized) return <div>Loading...</div>;

  if (initialized && (!authToken || !profile)) {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
