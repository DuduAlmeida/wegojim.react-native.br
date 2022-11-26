import { IonHeader, IonIcon } from "@ionic/react";

import { If } from "../If";
import useHeader from "./hooks";
import classNames from "classnames";
import { HeaderProps, ICON_STATE } from "./types";

import "./Header.scss";
import { Sidebar } from "components/Sidebar";

export const Header = ({
  goTo = "",
  className = "",
  title = "WEGOJIM",
  isExpanded = true,
  leftIcon = "BACK",
  rightIcon = "LOGOUT",
}: HeaderProps) => {
  const { onIconClick, handleSidebar, isSidebarOpen } = useHeader({ goTo });

  return (
    <>
      <IonHeader>
        <section
          className={classNames("page-header", {
            [className]: className,
            "page-header__expanded": !!isExpanded,
          })}
        >
          <If
            condition={!!leftIcon}
            renderIf={
              <div className="page-header__icon" onClick={leftIcon === 'MENU' ? handleSidebar : onIconClick}>
                <IonIcon icon={ICON_STATE[leftIcon || ""]} />
              </div>
            }
            renderElse={<div />}
          />
          <h1 className="page-header__title">{title}</h1>
          <If condition={!!rightIcon}>
            <div className="page-header__icon" onClick={onIconClick}>
              <IonIcon icon={ICON_STATE[rightIcon]} />
            </div>
          </If>
        </section>
      </IonHeader>
      
      <Sidebar isOpen={isSidebarOpen} onClose={() => handleSidebar(false)} />
    </>
  );
};
