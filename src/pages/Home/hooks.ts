import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";

import storage from "utils/storage";
import services from "../../services";
import debounce from "lodash.debounce";
import { CURRENT_DIVISION } from "constants/storage";
import { TrainingProxy } from "services/training/types";

const useHome = () => {
  const history = useHistory();
  const [modal, setModal] = useState<any>(null);
  const [search, setSearch] = useState<string>("");
  const [list, setList] = useState<TrainingProxy[]>([]);
  const [currentTraining, setCurrentTraining] = useState<TrainingProxy>();

  const doSearchDebounced = useRef(
    debounce((newSearch: any) => {
      setCurrentTraining(undefined);
      setSearch(newSearch?.value || "");
    }, 1000)
  ).current;

  const fetchTrainings = async () => {
    services.training
      .getList({ name: search })
      .then((execute) => execute(setList));
  };

  useEffect(() => {
    fetchTrainings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const onSubmit = () => {
    storage.set(CURRENT_DIVISION, currentTraining);

    history.push("/home");
  };

  const openModal = (training: TrainingProxy) => {
    setModal({
      title: training?.title,
      description: training?.description,
      button: { text: "Fechar", onClick: () => setModal(null) },
    });
  };

  return {
    list,
    modal,
    onSubmit,
    openModal,
    currentTraining,
    doSearchDebounced,
    setCurrentTraining,
    canSubmit: !!currentTraining,
    closeModal: () => setModal(null),
  };
};

export default useHome;
