import { IonIcon } from "@ionic/react";
import classNames from "classnames";

import { If } from "../If";
import { ButtonProps } from "./types";

import "./ButtonIcon.scss";

export const Button = ({
  text = "",
  icon = "",
  color = "yellow",
  variant = "",
  className = "",
  centered = false,
  onClick = (e) => e,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames("kq-button btn-primary", {
        [`kq-button__color--${color}`]: !!color,
        [`kq-button--${variant}`]: !!variant,
        [`kq-button--centered`]: centered,
        [className]: className,
      })}
      {...props}
    >
      <If condition={!!icon}>
        <div className="kq-button__icon">
          <IonIcon icon={icon} />
        </div>
      </If>
      <div className="kq-button__text">{text}</div>
    </button>
  );
};
