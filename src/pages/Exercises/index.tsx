import { IonContent, IonFooter, IonPage } from "@ionic/react";

import { Header } from "components/Header";
import Typography from "components/Typography";

export const Exercises = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="home">
        <Header />

        <Typography.Subtitle tag="h2" color="primary">
          Bora treinar?
        </Typography.Subtitle>
      </IonContent>
    </IonPage>
  );
};
