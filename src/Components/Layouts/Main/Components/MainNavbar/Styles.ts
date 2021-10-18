import { alpha, makeStyles, Theme } from '@material-ui/core';

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

export const MainNavbarStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: 'none',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    backgroundColor: alpha(theme.palette.background.default, 0.72),
    // [theme.breakpoints.up('lg')]: {
    //   width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
    // },
  },
  toolbar: {
    display: 'flex',
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('lg')]: {
      minHeight: APPBAR_DESKTOP,
      padding: '0px 40px',
    },
  },
  rightActions: {
    display: 'flex',
    alignItems: 'center',
  },
}));
