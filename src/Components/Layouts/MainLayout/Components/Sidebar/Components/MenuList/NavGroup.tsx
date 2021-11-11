// material-ui
import { Divider, List, Typography } from '@mui/material';

// project imports
import { MenuItemType } from '@Constants';
import { NavItem } from './NavItem';
import { NavCollapse } from './NavCollapse';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //
export type NavGroupProps = {
  item: MenuItemType;
};

export const NavGroup = ({ item }: NavGroupProps) => {
  // menu list collapse & items
  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        subheader={
          item.title && (
            <Typography
              variant="caption"
              sx={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'grey.600',
                padding: '6px',
                textTransform: 'capitalize',
                marginTop: '10px',
              }}
              display="block"
              gutterBottom
            >
              {item.title}
              {item.caption && (
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    color: 'text.secondary',
                    textTransform: 'capitalize',
                  }}
                  display="block"
                  gutterBottom
                >
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};
