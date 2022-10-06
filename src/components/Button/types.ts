export interface ButtonProps {
  text: string;
  icon?: string;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "ghost" | "small" | "report" | string;
  centered?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (event?: any) => any;
}
