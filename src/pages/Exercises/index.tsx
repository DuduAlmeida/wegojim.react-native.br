import { IonContent, IonFooter, IonPage } from "@ionic/react";

import { If } from "components/If";
import useExercises from "./hooks";
import { Header } from "components/Header";
import { Button } from "components/Button";
import Exercise from "./components/Exercise";
import { ExercisesPageProps } from "./types";
import Typography from "components/Typography";
import { HOW_IT_WORKS_DESCRIPTION } from "./constants";

import "./Exercises.scss";

export const Exercises: React.FC<ExercisesPageProps> = ({ match }) => {
  const { title, list, onToggle, canSubmit, onSubmit } = useExercises({
    exercise_id: match?.params?.exerciseId,
  });

  return (
    <IonPage>
      <IonContent fullscreen className="exercises">
        <Header goTo="/home" className="exercises__header" />

        <Typography.Text tag="h3" color="white" className="exercises__subtitle">
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

        <ul>
          {list.map((exercise, index) => (
            <Exercise key={index} {...exercise} onToggle={onToggle} />
          ))}
        </ul>
      </IonContent>
      <If condition={!!canSubmit}>
        <IonFooter>
          <Button
            centered
            variant="ghost"
            onClick={onSubmit}
            text="CHEGA POR HOJE"
            className="exercises__submit"
          />
        </IonFooter>
      </If>
    </IonPage>
  );
};
