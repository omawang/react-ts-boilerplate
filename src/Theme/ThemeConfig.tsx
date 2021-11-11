import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { themes } from './themes';

type ThemeConfigProps = {
  children: React.ReactNode;
};

export const ThemeConfig = ({ children }: ThemeConfigProps) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={themes()}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </StyledEngineProvider>
);
