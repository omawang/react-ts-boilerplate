import { makeStyles, Theme } from '@material-ui/core';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

export const MainLayoutStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
  },
  body: {
    flexGrow: 1,
    minHeight: '100%',
  },
  pageContent: {
    flexGrow: 1,
    overflow: 'auto',
    minHeight: `calc(100% - ${APP_BAR_MOBILE}px)`,
    paddingTop: '16px',
    paddingBottom: '80px',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
}));
