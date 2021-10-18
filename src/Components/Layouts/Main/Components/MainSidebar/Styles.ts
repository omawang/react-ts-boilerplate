import { makeStyles, Theme } from '@material-ui/core';

const DRAWER_WIDTH = 280;

export const MainSidebarStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      width: DRAWER_WIDTH,
    },
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
}));
