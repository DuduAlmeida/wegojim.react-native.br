import { IonHeader, IonIcon } from '@ionic/react'

import { If } from '../If';
import useHeader from './hooks';
import classNames from "classnames";
import { HeaderProps, ICON_STATE } from './types';

import "./Header.scss"

export const Header = ({
  goTo = "",
  title = "",
  icon = "MENU",
  className = "",
  isExpanding = true,
}: HeaderProps) => {
  const { onIconClick } = useHeader({ goTo })

  return (
    <IonHeader >
      <section className={classNames("page-header", {
        [className]: className,
        "page-header__expanded": !!isExpanding
      })}>
        <If condition={!!icon}>
          <div
            className="page-header__icon"
            onClick={onIconClick}
          >
            <IonIcon icon={ICON_STATE[icon]} />
          </div>
        </If>
        <h1 className="page-header__title">{title}</h1>
      </section>
    </IonHeader>
  )
}
