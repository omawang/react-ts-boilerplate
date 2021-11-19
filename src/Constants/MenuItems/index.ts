import dashboard from './dashboard';
import master from './master';

// ==============================|| MENU ITEMS ||============================== //

export type MenuItemType = {
  id: string;
  title: string;
  caption?: string;
  type: string;
  url?: string;
  icon?: any;
  breadcrumbs?: boolean;
  target?: boolean;
  external?: boolean;
  disabled?: boolean;
  children?: MenuItemType[];
};

export const MenuItems: { items: MenuItemType[] } = {
  items: [dashboard, master],
};
