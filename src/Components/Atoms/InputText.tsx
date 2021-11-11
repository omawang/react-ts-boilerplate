import { FormControl, FormHelperText, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material';

export interface InputTextProps extends OutlinedInputProps {
  errorText?: string;
  sxFormControl?: any;
}

export const InputText = ({
  type = 'text',
  label,
  name,
  value,
  error,
  errorText,
  onChange,
  onBlur,
  sxFormControl = {},
  ...InputProps
}: InputTextProps) => (
  <FormControl
    sx={{
      marginTop: 1,
      marginBottom: 1,
      '& > label': {
        top: 23,
        left: 0,
        color: 'grey.500',
        '&[data-shrink="false"]': {
          top: 5,
        },
      },
      '& > div > input': {
        padding: '30.5px 14px 11.5px !important',
      },
      '& legend': {
        display: 'none',
      },
      '& fieldset': {
        top: 0,
      },
      ...sxFormControl,
    }}
    fullWidth
    error={error}
  >
    {label && <InputLabel sx={{ color: 'pink' }}>{label}</InputLabel>}
    <OutlinedInput id={name} type={type} value={value} name={name} onBlur={onBlur} onChange={onChange} label={label} {...InputProps} />
    {error && (
      <FormHelperText error id="standard-weight-helper-text-email-login">
        {errorText}
      </FormHelperText>
    )}
  </FormControl>
);
