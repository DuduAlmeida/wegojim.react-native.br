import { IonContent, IonFooter, IonIcon, IonPage } from "@ionic/react";
import { helpCircleOutline } from "ionicons/icons";

import { If } from "components/If";
import classnames from "classnames";
import { getIfHasSameId } from "./utils";
import useSelectTraining from "./hooks";
import { Button } from "components/Button";
import Typography from "components/Typography";

import "./SelectDivisions.scss";

const SelectTraining: React.FC = () => {
  const {
    list,
    onSubmit,
    canSubmit,
    openModal,
    currentDivision,
    setCurrentDivision,
  } = useSelectTraining();

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
      <If condition={!!canSubmit}>
        <IonFooter>
          <Button
            centered
            variant="ghost"
            text="CONTINUAR"
            onClick={onSubmit}
            className="select-divisions__button"
          />
        </IonFooter>
      </If>
    </IonPage>
  );
};

export default SelectTraining;
