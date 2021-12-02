import { useState, useEffect } from 'react';
// material-ui
import { Box, Button, IconButton, InputAdornment, Stack, Typography } from '@mui/material';

// third party
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

// assets
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputText } from '@Components';
import { loginAPI } from '@API';
import { formatAPIErrors } from '@Functions';
import { useAppDispatch, useAppSelector, fetchProfileThunk, setAuthToken } from '@Redux';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { authToken, profile } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const { values, handleChange, handleBlur, errors, handleSubmit, touched, isSubmitting } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().max(255).required('Username is required'),
      password: Yup.string().max(255).required('Password is required'),
    }),
    onSubmit: async (data, { setErrors }) => {
      try {
        const result = await loginAPI(data);
        localStorage.setItem('token', result.data.data.accessToken);
        localStorage.setItem('refreshToken', result.data.data.refreshToken);
        dispatch(setAuthToken(result.data.data.accessToken));
        await dispatch(fetchProfileThunk(result.data.data.accessToken));
      } catch (err: any) {
        if (err?.errors?.content) {
          const errs = formatAPIErrors(err?.errors?.content);
          setErrors(errs);
        }
      }
    },
  });

  useEffect(() => {
    if (authToken && profile) navigate('/dashboard', { replace: true });
  }, [authToken, profile]);

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
