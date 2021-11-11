import { forwardRef, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';

// project imports
import { SidebarContext } from '@Contexts';
import { MenuItemType } from '@Constants';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

export type NavItemProps = {
  item: MenuItemType;
  level: number;
};

export const NavItem = ({ item, level }: NavItemProps) => {
  const theme = useTheme();
  const { isOpen, setIsOpen, setLeftDrawerOpened } = useContext(SidebarContext);
  const matchesDownLG = useMediaQuery(theme.breakpoints.down('lg'));

  const Icon = item.icon;
  const itemIcon = item?.icon ? (
    <Icon stroke={1.5} size="1.3rem" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
        height: isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps: any = {
    // eslint-disable-next-line react/prop-types
    component: forwardRef<any, any>((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />),
  };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = (id: string) => {
    setIsOpen([id]);
    if (matchesDownLG) setLeftDrawerOpened(false);
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) setIsOpen([item.id]);
  }, []);

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        borderRadius: '12px',
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
      }}
      selected={isOpen.findIndex((id) => id === item.id) > -1}
      onClick={() => itemHandler(item.id)}
    >
      <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography variant={isOpen.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'} color="inherit">
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
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
          )
        }
      />
    </ListItemButton>
  );
};
