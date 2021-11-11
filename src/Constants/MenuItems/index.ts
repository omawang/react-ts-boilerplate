import dashboard from './dashboard';
// import pages from './pages';
// import utilities from './utilities';
// import other from './other';

// ==============================|| MENU ITEMS ||============================== //

export type MenuItemType = {
  id: string;
  title: string;
  caption?: string;
  type: string;
  url?: string;
  icon?: any;
  breadcrumbs?: boolean;
  target?: string;
  external?: boolean;
  disabled?: boolean;
  children?: MenuItemType[];
};

export const MenuItems: { items: MenuItemType[] } = {
  items: [dashboard],
};
