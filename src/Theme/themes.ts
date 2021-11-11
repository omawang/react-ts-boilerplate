import { createTheme, Theme } from '@mui/material/styles';

// assets
import { colors } from './colors';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

export const themes = (): Theme => {
  const color = colors;

  const themeColors = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
  };

  const theme = createTheme({
    direction: 'ltr',
    palette: themePalette(themeColors),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px',
        },
      },
    },
    typography: themeTypography(themeColors),
  });
  theme.components = componentStyleOverrides(themeColors);

  return theme;
};
