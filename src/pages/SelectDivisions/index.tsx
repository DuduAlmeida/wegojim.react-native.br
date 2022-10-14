import { IonContent, IonFooter, IonIcon, IonPage } from "@ionic/react";
import { helpCircleOutline } from "ionicons/icons";

import classnames from "classnames";
import { getIfHasSameId } from "./utils";
import useSelectDivisions from "./hooks";
import { Button } from "components/Button";
import Typography from "components/Typography";

import "./SelectDivisions.scss";

const SelectDivisions: React.FC = () => {
  const {
    list,
    onSubmit,
    canSubmit,
    openModal,
    currentDivision,
    setCurrentDivision,
  } = useSelectDivisions();

  return (
    <IonPage>
      <IonContent fullscreen className="select-divisions">
        <Typography.Subtitle tag="h1">
          Qual divisão de treino você gostaria de ter?
        </Typography.Subtitle>

        <ul className="select-divisions__list">
          {list.map((division, divisionIndex) => (
            <li
              key={`division_${divisionIndex}`}
              className={classnames("select-divisions__item", {
                "select-divisions__item--selected": getIfHasSameId(
                  division,
                  currentDivision
                ),
              })}
            >
              <Typography.Text onClick={() => setCurrentDivision(division)}>
                {division.title}
              </Typography.Text>

              <IonIcon
                icon={helpCircleOutline}
                onClick={() => openModal(division)}
              />
            </li>
          ))}
        </ul>
      </IonContent>
      <IonFooter>
        <Button
          centered
          variant="ghost"
          text="CONTINUAR"
          onClick={onSubmit}
          disabled={!canSubmit}
          className="select-divisions__button"
        />
      </IonFooter>
    </IonPage>
  );
};

export default SelectDivisions;
