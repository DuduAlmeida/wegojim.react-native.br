import { IonContent, IonFooter, IonIcon, IonPage } from "@ionic/react";
import { helpCircleOutline, arrowBackOutline, backspace } from "ionicons/icons";

import { If } from "components/If";
import classnames from "classnames";
import { getIfHasSameId } from "./utils";
import useSelectTraining from "./hooks";
import { Button } from "components/Button";
import Typography from "components/Typography";

import "./SelectTraining.scss";
import Modal from "../../components/Modal";
import { Input } from "components/Input";
import { Card } from "../../components/Card";

const SelectTraining: React.FC = () => {
  const {
    list,
    modal,
    onSubmit,
    canSubmit,
    openModal,
    closeModal,
    currentTraining,
    doSearchDebounced,
    setCurrentTraining,
  } = useSelectTraining();

  return (
    <IonPage>
      <IonContent fullscreen className="select-training">
        <header className="select-training__header">
          <IonIcon
            icon={arrowBackOutline}
            className="select-training__back"
            // TODO: ADD ONCLICK EVENT
          ></IonIcon>

          <Typography.Subtitle tag="h1">
            Clique no treino desejado
          </Typography.Subtitle>
        </header>

        <Input
          className="select-training__input"
          placeholder="Pesquisar pelo título..."
          onChange={(event) => doSearchDebounced(event?.target)}
        />

        <If
          condition={!!list?.length}
          renderIf={
            <ul className="select-training__list">
              {list.map((division, divisionIndex) => (
                <Card
                  entity={division}
                  title={division?.title}
                  onSuggestionClick={openModal}
                  key={`division_${divisionIndex}`}
                  description={division?.exercisesTitle}
                  onClick={() => setCurrentTraining(division)}
                  isSelected={division?.id === currentTraining?.id}
                />
              ))}
            </ul>
          }
          renderElse={
            <Card title="Atenção" description="Nenhum treino encontrado" />
          }
        />
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
  );
};

export default SelectTraining;
