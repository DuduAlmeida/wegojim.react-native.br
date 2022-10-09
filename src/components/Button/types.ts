export interface ButtonProps {
  text: string;
  icon?: string;
  centered?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (event?: any) => any;
  color?: "yellow" | "white" | string;
  variant?: "ghost" | "small" | "report" | string;
  type?: "button" | "submit" | "reset" | undefined;
}
