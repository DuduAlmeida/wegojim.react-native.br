import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import storage from "utils/storage";
import services from "../../services";
import { CURRENT_DIVISION } from "constants/storage";
import { TrainingProxy } from "services/training/types";

const useSelectTraining = () => {
  const history = useHistory();
  const [modal, setModal] = useState<any>(null);
  const [list, setList] = useState<TrainingProxy[]>([]);
  const [currentTraining, setCurrentTraining] = useState<TrainingProxy>();

  const fetchTrainings = async () => {
    services.training.getList().then((execute) => execute(setList));
  };

  useEffect(() => {
    fetchTrainings();
  }, []);

  const onSubmit = () => {
    storage.set(CURRENT_DIVISION, currentTraining);

    history.push("/select-training");
  };

  const openModal = (division: TrainingProxy) => {
    setModal({
      title: division?.title,
      description: division?.description,
      button: { text: "Fechar", onClick: () => setModal(null) },
    });
  };

  return {
    list,
    modal,
    onSubmit,
    openModal,
    currentDivision: currentTraining,
    setCurrentDivision: setCurrentTraining,
    canSubmit: !!currentTraining,
    closeModal: () => setModal(null),
  };
};

export default useSelectTraining;
