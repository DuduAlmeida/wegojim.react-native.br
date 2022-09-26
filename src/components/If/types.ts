import { ReactNode } from "react";

export interface IfProps {
  condition: boolean;
  renderIf?: JSX.Element | ReactNode | string;
  renderElse?: JSX.Element | ReactNode | string;
  children?: ReactNode;
}
