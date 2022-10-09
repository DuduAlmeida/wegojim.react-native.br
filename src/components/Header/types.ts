import { menu, arrowBack } from "ionicons/icons";

export interface HeaderProps {
  goTo?: string;
  title?: string;
  leftIcon?: string;
  rightIcon?: string;
  className?: string;
  isExpanded?: boolean;
}

// type iconNames = 'MENU' | 'BACK';
export const ICON_STATE: Record<string, string> = {
  MENU: menu,
  BACK: arrowBack,
};
