import { IonContent, IonFooter, IonIcon, IonPage } from "@ionic/react";
import { helpCircleOutline } from "ionicons/icons";

import { If } from "components/If";
import classnames from "classnames";
import { getIfHasSameId } from "./utils";
import useSelectDivisions from "./hooks";
import { Button } from "components/Button";
import Typography from "components/Typography";

import "./SelectDivisions.scss";
import Modal from "../../components/Modal";

const SelectDivisions: React.FC = () => {
  const {
    list,
    modal,
    onSubmit,
    canSubmit,
    openModal,
    closeModal,
    currentDivision,
    setCurrentDivision,
  } = useSelectDivisions();

  return (
    <>
      <IonPage>
        <IonContent fullscreen className="select-divisions">
          <Typography.Subtitle tag="h1">
            Qual divisão de treino você gostaria de ter?
          </Typography.Subtitle>

          <ul className="select-divisions__list">
            {list.map((division, divisionIndex) => (
              <li
                key={`division_${divisionIndex}`}
                className="select-divisions__item"
              >
                <button
                  onClick={() => setCurrentDivision(division)}
                  className={getIfHasSameId(
                    division,
                    currentDivision
                  ) ? "select-divisions__item--radio-selected" : "select-divisions__item--radio" }
                ></button>
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
        <If condition={canSubmit}>
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
        <Modal
          height="auto"
          title={modal?.title}
          visibility={!!modal}
          closeModal={closeModal}
          className="select-divisions__modal"
        >
          <Typography.Text centered>{modal?.description}</Typography.Text>

          <Button
            centered
            variant="muted"
            text={modal?.button?.text}
            onClick={modal?.button?.onClick}
          />
        </Modal>
      </IonPage>
    </>
  );
};

export default SelectDivisions;
