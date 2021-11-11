import { useState } from 'react';
// material-ui
import { Box, Button, IconButton, InputAdornment, Stack, Typography } from '@mui/material';

// third party
import * as Yup from 'yup';
import { useFormik } from 'formik';

// assets
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputText } from '@Components';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const { values, handleChange, handleBlur, errors, handleSubmit, touched, isSubmitting } = useFormik({
    initialValues: {
      username: 'info@codedthemes.com',
      password: '123456',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().max(255).required('Username is required'),
      password: Yup.string().max(255).required('Password is required'),
    }),
    onSubmit: async (data, { setErrors, setStatus, setSubmitting }) => {
      try {
        // if (scriptedRef.current) {
        //     setStatus({ success: true });
        //     setSubmitting(false);
        // }
      } catch (err) {
        console.error(err);
        // if (scriptedRef.current) {
        //     setStatus({ success: false });
        //     setErrors({ submit: err.message });
        //     setSubmitting(false);
        // }
      }
    },
  });

  return (
    <Box>
      <Typography variant="subtitle1" mb={2}>
        Sign in with Username
      </Typography>

      <form noValidate onSubmit={handleSubmit}>
        <InputText
          label="Username"
          name="username"
          value={values.username}
          error={Boolean(touched.username && errors.username)}
          errorText={errors.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <InputText
          label="Password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={values.password}
          error={Boolean(touched.password && errors.password)}
          errorText={errors.password}
          onChange={handleChange}
          onBlur={handleBlur}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end" size="large">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />

        <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={1}>
          <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
            Forgot Password?
          </Typography>
        </Stack>

        <Box sx={{ mt: 2 }}>
          <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
            Sign in
          </Button>
        </Box>
      </form>
    </Box>
  );
};
