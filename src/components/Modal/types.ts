import { ReactNode } from "react";

export interface ModalProps {
  title?: string;
  className?: string;
  visibility?: boolean;
  children?: ReactNode;
  closeModal?: (e: any) => any;
  visibilityType?: "IF" | "CSS";
  variant?: "normal" | "bottom" | "upper";
  height?: "big" | "medium" | "small" | "auto";
}
