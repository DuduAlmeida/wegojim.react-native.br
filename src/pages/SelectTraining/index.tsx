import { IonContent, IonFooter, IonIcon, IonPage } from "@ionic/react";
import { helpCircleOutline, arrowBackOutline } from "ionicons/icons";

import { If } from "components/If";
import classnames from "classnames";
import { getIfHasSameId } from "./utils";
import useSelectTraining from "./hooks";
import { Button } from "components/Button";
import Typography from "components/Typography";

import "./SelectTraining.scss";

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
      <IonContent fullscreen className="select-training">
        <header className="select-training__header">
          <IonIcon
            icon={arrowBackOutline}
            className="select-training__back"
          ></IonIcon>

          <Typography.Subtitle tag="h1">
            Clique no treino desejado
          </Typography.Subtitle>
        </header>

        <ul className="select-training__list">
          {list.map((division, divisionIndex) => (
            <li
              key={`division_${divisionIndex}`}
              className={classnames("select-training__item", {
                "select-training__item--selected": getIfHasSameId(
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
            className="select-training__button"
          />
        </IonFooter>
      </If>
    </IonPage>
  );
};

export default SelectTraining;
