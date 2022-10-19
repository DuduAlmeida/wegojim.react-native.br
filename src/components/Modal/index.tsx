import { IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";

import "./Modal.scss";
import { If } from "../If";
import classnames from "classnames";
import { ModalProps } from "./types";

const Modal = ({
  closeModal = (e) => e,
  visibilityType = "IF",
  variant = "normal",
  visibility = true,
  height = "big",
  className,
  children,
  title,
  ...props
}: ModalProps) => {
  const isIFVisibility = visibilityType === "IF";
  const isCSSVisibility = visibilityType === "CSS";

  return (
    <If condition={(isIFVisibility && !!visibility) || isCSSVisibility}>
      <div
        className={classnames("modal-container", {
          [`modal-container--${variant}`]: variant,
          [`modal-container--visible`]:
            isIFVisibility || (isCSSVisibility && !!visibility),
        })}
        {...props}
      >
        <div
          className={classnames("modal-container__content", {
            [`modal-container__content--${height}`]: height,
            [`${className}`]: !!className,
          })}
        >
          <div className="modal-container__header">
            <span>{title}</span>
          </div>
          <div className="modal-container__children">{children}</div>
        </div>
      </div>
    </If>
  );
};

export default Modal;
