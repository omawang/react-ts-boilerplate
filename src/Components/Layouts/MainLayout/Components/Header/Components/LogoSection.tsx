import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
// import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

export const LogoSection = () => (
  <ButtonBase disableRipple component={Link} to="/dashboard">
    {/* <Logo /> */}
    LOGO
  </ButtonBase>
);
