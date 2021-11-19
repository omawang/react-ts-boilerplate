// assets
import { IconDashboard } from '@tabler/icons';
import { MenuItemType } from '@Constants';

// constant
const icons = { IconDashboard };

const master: MenuItemType = {
  id: 'master',
  title: 'Master',
  type: 'group',
  children: [
    {
      id: 'anggota',
      title: 'Anggota',
      type: 'collapse',
      icon: icons.IconDashboard,

      children: [
        {
          id: 'anggota-prelist',
          title: 'Prelist',
          type: 'item',
          url: '/anggota/prelist',
        },
      ],
    },
  ],
};

export default master;
