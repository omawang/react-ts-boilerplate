import React from 'react';
import { Hidden, IconButton } from '@material-ui/core';
import { HiOutlineMenu } from 'react-icons/hi';
import { MainNavbarStyles } from './Styles';

export type MainNavbarProps = {
  onOpenSidebar: () => void;
};

export const MainNavbar = ({ onOpenSidebar }: MainNavbarProps) => {
  const classes = MainNavbarStyles();

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton onClick={onOpenSidebar}>
            <HiOutlineMenu />
          </IconButton>
        </Hidden>
        <div style={{ flexGrow: 1 }} />
        <div className={classes.rightActions}>aa</div>
      </div>
    </div>
  );
};
