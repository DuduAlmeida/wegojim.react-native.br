import { IonIcon, IonInput } from "@ionic/react";
import { search } from "ionicons/icons";
import { InputProps } from "./types";

import "./styles.scss"

export function Input({ ...props }: InputProps) {
  return (
    <div className="input">
      <input 
      { ...props }
      className="input__textfield"
    />
    {/* <button
      className="input__button"
    >
      <IonIcon
        icon={search}
      />
    </button> */}
    </div>
  )
}