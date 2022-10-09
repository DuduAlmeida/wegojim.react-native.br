import { IonContent, IonPage } from "@ionic/react";

import useSelectDivisions from "./hooks";
import { Header } from "components/Header";
import { Button } from "components/Button";
import Typography from "components/Typography";

import "./SelectDivisions.scss";

const SelectDivisions: React.FC = () => {
  const { onSubmit, list, setCurrentDivision } = useSelectDivisions();

  return (
    <IonPage>
      <IonContent fullscreen className="select-divisions">
        <Header />

        {list.map((division, divisionIndex) => (
          <Typography.Text
            key={`division_${divisionIndex}`}
            onPress={() => setCurrentDivision(division)}
          >
            {division.title}
          </Typography.Text>
        ))}

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
