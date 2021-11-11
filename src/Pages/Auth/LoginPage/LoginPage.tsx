import { Link } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import { MainCard } from '@Components';
import { LoginForm } from './Components';

export const LoginPage = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ backgroundColor: 'primary.light', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <MainCard
          sx={{
            maxWidth: { xs: 400, lg: 475 },
            margin: { xs: 2.5, md: 3 },
          }}
          content={false}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: { xs: 2, sm: 3, xl: 5 } }}>
            <Box mb={3}>
              <Link to="/">Logo</Link>
            </Box>
            <Stack alignItems="center" justifyContent="center" spacing={1}>
              <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownMD ? 'h3' : 'h2'}>
                Hi, Welcome Back
              </Typography>
              <Typography variant="caption" fontSize="16px" textAlign={matchDownMD ? 'center' : 'inherit'}>
                Enter your credentials to continue
              </Typography>
            </Stack>
            <Box mt={3}>
              <LoginForm />
            </Box>
          </Box>
        </MainCard>
      </Box>
    </Box>
  );
};
