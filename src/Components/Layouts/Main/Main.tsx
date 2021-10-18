import React, { useState } from 'react';
import { MainNavbar, MainSidebar } from './Components';
import { MainLayoutStyles } from './Styles';

export const MainLayout = (Page: React.ComponentType) => {
  const NewPage = () => {
    const classes = MainLayoutStyles();
    const [open, setOpen] = useState(false);

    return (
      <div className={classes.root}>
        <MainSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
        <div className={classes.body}>
          <MainNavbar onOpenSidebar={() => setOpen(true)} />
          <div className={classes.pageContent}>
            <Page />
          </div>
        </div>
      </div>
    );
  };

  return NewPage;
};
