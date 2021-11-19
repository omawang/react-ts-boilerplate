// material-ui
import { Typography } from '@mui/material';

// project imports
import { MenuItems } from '@Constants';
import { NavGroup } from './NavGroup';

// ==============================|| SIDEBAR MENU LIST ||============================== //

export const MenuList = () => (
  <>
    {MenuItems.items.map((item) => {
      switch (item.type) {
        case 'group':
          return <NavGroup key={item.id} item={item} />;
        default:
          return (
            <Typography key={item.id} variant="h6" color="error" align="center">
              Menu Items Error
            </Typography>
          );
      }
    })}
  </>
);
