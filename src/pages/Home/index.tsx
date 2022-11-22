import { IonContent, IonFooter, IonIcon, IonPage } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

import { Button } from "components/Button";
import { If } from "components/If";
import Typography from "components/Typography";
import useHome from "./hooks";

const Home: React.FC = () => {
  const {
    list,
    modal,
    onSubmit,
    canSubmit,
    openModal,
    closeModal,
    currentTraining,
    doSearchDebounced,
    setCurrentTraining,
  } = useHome();

  return (
    <IonPage>
      <IonContent fullscreen className="select-training">
        <header className="select-training__header">
          <IonIcon
            icon={arrowBackOutline}
            className="select-training__back"
          ></IonIcon>

          <Typography.Subtitle tag="h1">WEGOJYM</Typography.Subtitle>

          <div />
        </header>
      </IonContent>
      <If condition={!!canSubmit}>
        <Typography.Subtitle tag="h2">Bora treinar?</Typography.Subtitle>

        <IonFooter>
          <Button
            centered
            variant="ghost"
            text="CONTINUAR"
            onClick={onSubmit}
            className="select-training__button"
          />
        </IonFooter>
      </If>
    </IonPage>
  );
};

export default Home;
