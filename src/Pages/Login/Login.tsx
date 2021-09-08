import { Container, Typography, useTheme } from '@material-ui/core';
import { LoginForm } from './Components';
import { LoginPageStyles } from './Styles';

export const LoginPage = () => {
  const classes = LoginPageStyles();
  const theme = useTheme();

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
