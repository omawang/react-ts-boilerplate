import { useState } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, IconButton, InputAdornment } from '@material-ui/core';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { InputText } from '@Components';
import { loginThunk, useAppDispatch, useAppSelector } from '@Redux';
import { formatAPIErrors } from '@Functions';
import { LoginFormStyles } from './Styles';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { errors: loginErrors, authToken } = useAppSelector((state) => state.account);
  const classes = LoginFormStyles();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors }) => {
      const result = await dispatch(loginThunk(values));
      if (result.type === 'account/login/rejected') setErrors(formatAPIErrors(loginErrors));
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <div className={classes.root}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <InputText
            label="Username"
            placeholder="Username"
            {...getFieldProps('username')}
            error={Boolean(touched.username && errors.username)}
            helperText={touched.username && errors.username}
          />

          <InputText
            type={showPassword ? 'text' : 'password'}
            label="Password"
            placeholder="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Login
          </Button>
        </Form>
      </FormikProvider>
    </div>
  );
};
