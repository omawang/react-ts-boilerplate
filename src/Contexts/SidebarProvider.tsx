import { createContext, ReactNode, useMemo, useState } from 'react';

type SidebarContextType = {
  leftDrawerOpened: boolean;
  setLeftDrawerOpened: (open: boolean) => void;
  toggleLeftDrawer: () => void;
  isOpen: string[];
  setIsOpen: (ids: string[]) => void;
};

export const SidebarContext = createContext<SidebarContextType>({
  leftDrawerOpened: true,
  setLeftDrawerOpened: () => {},
  toggleLeftDrawer: () => {},
  isOpen: [],
  setIsOpen: () => {},
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [leftDrawerOpened, setLeftDrawerOpened] = useState(true);
  const [isOpen, setIsOpen] = useState<string[]>([]);

  const toggleLeftDrawer = () => setLeftDrawerOpened(!leftDrawerOpened);

  const value = useMemo(() => ({ leftDrawerOpened, setLeftDrawerOpened, toggleLeftDrawer, isOpen, setIsOpen }), []);

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};
