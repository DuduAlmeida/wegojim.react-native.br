import { IonContent,  IonPage,  } from '@ionic/react';

import {Header} from "components/Header"
import {Button} from "components/Button"

// import './Login.scss';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen  className="login">
        <Header />

        <Button text="Login com o Google"/>
      </IonContent>
    </IonPage>
  );
};

export default Login;
