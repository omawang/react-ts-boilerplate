import React from 'react';
import { Drawer } from '@material-ui/core';
import { MainSidebarStyles } from './Styles';

export type MainSidebarProps = {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
};

export const MainSidebar = ({ isOpenSidebar, onCloseSidebar }: MainSidebarProps) => {
  const classes = MainSidebarStyles();

  return (
    <div className={classes.root}>
      <Drawer open variant="persistent" PaperProps={{ classes: { root: classes.drawerPaper } }}>
        sidebar
      </Drawer>
    </div>
  );
};
