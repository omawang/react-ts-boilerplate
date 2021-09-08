import React, { useMemo } from 'react';
import {
  createTheme,
  Theme,
  ThemeOptions,
  ThemeProvider,
} from '@material-ui/core';

import shape from './shape';
import palette from './palette';
import GlobalStyles from './GlobalStyles';
import typography from './typography';

export type ThemeConfigProps = {
  children: React.ReactNode;
};

export const ThemeConfig = ({ children }: ThemeConfigProps) => {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette,
      shape,
      typography,
    }),
    []
  );

  const theme: Theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
