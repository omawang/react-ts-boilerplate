import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchProfileThunk, setAuthToken, useAppDispatch, useAppSelector } from '@Redux';

export const AccountRedirect = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { authToken } = useAppSelector((state) => state.account);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    const result = await dispatch(fetchProfileThunk(token));
    if (result.type === 'account/fetchProfile/fulfilled') {
      dispatch(setAuthToken(token));
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (authToken) {
      history.replace('/dashboard');
    } else {
      localStorage.removeItem('token');
    }
  }, [authToken, history]);

  return <div />;
};
