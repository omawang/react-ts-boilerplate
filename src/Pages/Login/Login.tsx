import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import { fetchProfileThunk, useAppDispatch, useAppSelector } from '@Redux';
import { LoginForm } from './Components';
import { LoginPageStyles } from './Styles';

export const LoginPage = () => {
  const history = useHistory();
  // const dispatch = useAppDispatch();
  const classes = LoginPageStyles();
  const { authToken } = useAppSelector((state) => state.account);

  useEffect(() => {
    if (authToken) {
      history.replace('/dashboard');
    }
  }, [authToken, history]);

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Typography variant="h4" className={classes.title}>
          Sign In
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Enter your detail below
        </Typography>
        <div className={classes.formWrapper}>
          <LoginForm />
        </div>
      </Container>
    </div>
  );
};
