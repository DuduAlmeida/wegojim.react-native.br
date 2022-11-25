import { IonContent, IonFooter, IonPage } from "@ionic/react";

import useExercises from "./hooks";
import { Header } from "components/Header";
import Exercise from "./components/Exercise";
import { ExercisesPageProps } from "./types";
import Typography from "components/Typography";
import { HOW_IT_WORKS_DESCRIPTION } from "./constants";

import "./Exercises.scss";

export const Exercises: React.FC<ExercisesPageProps> = ({ match }) => {
  const { title, list, onToggle } = useExercises({
    exercise_id: match?.params?.exerciseId,
  });

  return (
    <IonPage>
      <IonContent fullscreen className="exercise">
        <Header />

        <Typography.Text tag="h3" color="white" className="exercise__subtitle">
          HOJE É DIA DE:
        </Typography.Text>
        <Typography.Title tag="h2" color="primary">
          {title}
        </Typography.Title>

        <details>
          <Typography.Text tag="summary" color="white">
            Como funciona?
          </Typography.Text>
          <Typography.Text color="white">
            {HOW_IT_WORKS_DESCRIPTION}
          </Typography.Text>
        </details>

        {list.map((exercise) => (
          <Exercise {...exercise} onToggle={onToggle} />
        ))}
      </IonContent>
    </IonPage>
  );
};
