import { makeStyles, Theme } from '@material-ui/core';

export const LoginPageStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    marginBottom: '8px',
  },
  formWrapper: {
    marginTop: '32px'
  },
}));
