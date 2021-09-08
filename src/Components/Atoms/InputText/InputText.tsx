import { TextField, TextFieldProps, Typography } from '@material-ui/core';

import { InputTextStyles } from './Styles';

export type InputTextProps = TextFieldProps & {
  label?: string;
};

export const InputText = ({ label, type = 'text', ...rest }: TextFieldProps) => {
  const classes = InputTextStyles();

  return (
    <div className={classes.root}>
      {label && <Typography variant="subtitle2">{label}</Typography>}
      <TextField fullWidth variant="outlined" type={type} {...rest} />
    </div>
  );
};
