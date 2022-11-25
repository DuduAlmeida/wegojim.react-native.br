import { IonContent, IonFooter, IonPage } from "@ionic/react";

import useHome from "./hooks";
import { Header } from "components/Header";
import { Topic } from "./components/Topic";
import Typography from "components/Typography";
import TextDivider from "./components/TextDivider";
import { Suggestion } from "./components/Suggestion";

import "./Home.scss";

const Home: React.FC = () => {
  const { list, suggestion } = useHome();

  return (
    <IonPage>
      <IonContent fullscreen className="home">
        <Header />

        <Typography.Subtitle tag="h2" color="primary">
          Bora treinar?
        </Typography.Subtitle>

        <Suggestion text={suggestion?.title || ""} />
        <TextDivider>OU</TextDivider>
        <ul>
          {list.map((exercise, index) => (
            <Topic key={index} text={exercise.title || ""} />
          ))}
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default Home;
