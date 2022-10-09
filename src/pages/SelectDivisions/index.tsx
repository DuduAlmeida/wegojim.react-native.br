import { IonContent, IonPage } from "@ionic/react";

import useSelectDivisions from "./hooks";
import { Header } from "components/Header";
import { Button } from "components/Button";

// import './SelectDivisions.scss';

const SelectDivisions: React.FC = () => {
  const { onSubmit } = useSelectDivisions();

  return (
    <IonPage>
      <IonContent fullscreen className="select-divisions">
        <Header />

        <Button
          onClick={onSubmit}
          className="select-divisions__button"
          text="Prosseguir"
        />
      </IonContent>
    </IonPage>
  );
};

export default SelectDivisions;
