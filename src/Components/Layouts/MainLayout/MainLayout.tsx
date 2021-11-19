import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Theme, Toolbar, useMediaQuery } from '@mui/material';

// project imports
import { UiConstant } from '@Constants';
import { SidebarContext } from '@Contexts';
import { Header, Sidebar } from './Components';

// assets

// styles
const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }: { theme: Theme; open: boolean }) => ({
  ...{
    backgroundColor: theme.palette.background.default,
    width: '100%',
    minHeight: 'calc(100vh - 88px)',
    flexGrow: 1,
    padding: '20px',
    marginTop: '88px',
    marginRight: '20px',
    borderRadius: '12px',
  },
  ...(!open && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
      marginLeft: -(UiConstant.drawerWidth - 20),
      width: `calc(100% - ${UiConstant.drawerWidth}px)`,
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: `calc(100% - ${UiConstant.drawerWidth}px)`,
      padding: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: `calc(100% - ${UiConstant.drawerWidth}px)`,
      padding: '16px',
      marginRight: '10px',
    },
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: `calc(100% - ${UiConstant.drawerWidth}px)`,
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    },
  }),
}));

// ==============================|| MAIN LAYOUT ||============================== //

export const MainLayout = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
  const { leftDrawerOpened, setLeftDrawerOpened, toggleLeftDrawer } = useContext(SidebarContext);

  useEffect(() => {
    if (matchDownMD) setLeftDrawerOpened(false);
  }, [matchDownMD]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.paper,
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none',
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={toggleLeftDrawer} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={toggleLeftDrawer} />

      {/* main content */}
      <Main theme={theme} open={leftDrawerOpened}>
        <Outlet />
      </Main>
    </Box>
  );
};
