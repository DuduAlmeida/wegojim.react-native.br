import { IonContent, IonFooter, IonPage } from "@ionic/react";

import useHome from "./hooks";
import { Header } from "components/Header";
import { Topic } from "./components/Topic";
import Typography from "components/Typography";
import TextDivider from "./components/TextDivider";
import { Suggestion } from "./components/Suggestion";

import "./Home.scss";

const Home: React.FC = () => {
  const { list, suggestion, onSelect } = useHome();

  return (
    <IonPage>
      <IonContent fullscreen className="home">
        <Header leftIcon={"MENU"} className="home__header" />

        <Typography.Subtitle tag="h2" color="primary">
          Bora treinar?
        </Typography.Subtitle>

        <Suggestion
          text={suggestion?.title || ""}
          onClick={(e) => onSelect(suggestion)}
        />
        <TextDivider>OU</TextDivider>
        <ul>
          {list.map((exercise, index) => (
            <Topic
              key={index}
              text={exercise.title || ""}
              onClick={(e) => onSelect(exercise)}
            />
          ))}
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default Home;
