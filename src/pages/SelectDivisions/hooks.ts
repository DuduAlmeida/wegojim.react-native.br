import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import storage from "utils/storage";
import services from "../../services";
import { CURRENT_DIVISION } from "constants/storage";
import { DivisionProxy } from "services/divisions/types";

const useSelectDivisions = () => {
  const history = useHistory();
  const [modal, setModal] = useState<any>(null);
  const [list, setList] = useState<DivisionProxy[]>([]);
  const [currentDivision, setCurrentDivision] = useState<DivisionProxy>();

  const fetchDivisions = async () => {
    services.divisions.getList({}).then((execute) => execute(setList));
  };

  useEffect(() => {
    fetchDivisions();
  }, []);

  const onSubmit = () => {
    storage.set(CURRENT_DIVISION, currentDivision);

    history.push("/select-training");
  };

  const openModal = (division: DivisionProxy) => {
    console.log("Open", division)
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
    currentDivision,
    setCurrentDivision,
    canSubmit: !!currentDivision,
    closeModal: () => setModal(null),
  };
};

export default useSelectDivisions;
