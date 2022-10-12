import { IonHeader, IonIcon } from '@ionic/react'

import { If } from '../If';
import useHeader from './hooks';
import classNames from "classnames";
import { HeaderProps, ICON_STATE } from './types';

import "./Header.scss"

export const Header = ({
  goTo = "",
  className = "",
  title = "WEGOJIM",
  isExpanded = true,
  leftIcon = "BACK",
  rightIcon = "LOGOUT",
}: HeaderProps) => {
  const { onIconClick } = useHeader({ goTo })

  return (
    <IonHeader >
      <section className={classNames("page-header", {
        [className]: className,
        "page-header__expanded": !!isExpanded
      })}>
        <If condition={!!leftIcon}>
          <div
            className="page-header__icon"
            onClick={onIconClick}
          >
            <IonIcon icon={ICON_STATE[leftIcon]} />
          </div>
        </If>
        <h1 className="page-header__title">{title}</h1>
        <If condition={!!rightIcon}>
          <div
            className="page-header__icon"
            onClick={onIconClick}
          >
            <IonIcon icon={ICON_STATE[rightIcon]} />
          </div>
        </If>
      </section>
    </IonHeader>
  )
}
