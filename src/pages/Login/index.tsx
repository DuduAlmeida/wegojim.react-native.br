import { IonContent, IonPage } from "@ionic/react";

import useLogin from "./hooks";
import { Button } from "components/Button";
import Typography from "components/Typography";

import "./Login.scss";

const Login: React.FC = () => {
  const { onGoogleClick } = useLogin();

  return (
    <IonPage>
      <IonContent fullscreen className="login">
        <section className="login__centralized">
          <div className="login__banner">
            <img
              alt="Halter amarelo"
              src="assets/icon/halter.svg"
              className="login__logo"
            />
            <Typography.Title>WEGOJIM</Typography.Title>
            <Typography.Text>Gym training Tracker</Typography.Text>
          </div>

          <Button
            className="login__button"
            onClick={onGoogleClick}
            text="Login com o Google"
          />
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Login;
