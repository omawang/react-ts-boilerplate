import React from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';

// project imports
import { UiConstant } from '@Constants';
import { MenuList } from './Components';

export type SidebarProps = {
  drawerOpen: boolean;
  drawerToggle: () => void;
};

export const Sidebar = ({ drawerOpen, drawerToggle }: SidebarProps) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
          {/* <LogoSection /> */}
          logo
        </Box>
      </Box>
      <Box sx={{ px: 2 }}>
        <MenuList />
      </Box>
    </>
  );

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? UiConstant.drawerWidth : 'auto' }} aria-label="mailbox folders">
      <Drawer
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: UiConstant.drawerWidth,
            background: theme.palette.background.paper,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '80px',
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
