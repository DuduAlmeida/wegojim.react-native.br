import { menu, arrowBack } from "ionicons/icons";

export interface HeaderProps {
  title: string;
  icon?: string;
  goTo?: string;
  isExpanding?: boolean;
  className?: string;
}

// type iconNames = 'MENU' | 'BACK';
export const ICON_STATE: Record<string, string> = {
  MENU: menu,
  BACK: arrowBack,
};
