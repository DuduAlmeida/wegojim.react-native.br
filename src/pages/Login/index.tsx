import { IonContent, IonPage } from "@ionic/react";

import useLogin from "./hooks";
import { Header } from "components/Header";
import { Button } from "components/Button";

// import './Login.scss';

const Login: React.FC = () => {
  const { onGoogleClick } = useLogin();

  return (
    <IonPage>
      <IonContent fullscreen className="login">
        <Header />

        <img
          alt="Halter amarelo"
          src="icon/halter.svg"
          className="login__logo"
        />

        <Button
          className="login__button"
          onClick={onGoogleClick}
          text="Login com o Google"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
