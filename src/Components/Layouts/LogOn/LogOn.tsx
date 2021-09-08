import { ComponentType } from 'react';
import { LogOnLayoutStyles } from './Styles';

export const LogOnLayout = (Page: ComponentType) => {
  const classes = LogOnLayoutStyles();

  const NewPage = () => (
    <div className={classes.root}>
      <Page />
    </div>
  );

  return NewPage;
};
