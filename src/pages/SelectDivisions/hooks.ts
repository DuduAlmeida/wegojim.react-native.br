import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import storage from "utils/storage";
import services from "../../services";
import { CURRENT_DIVISION } from "constants/storage";
import { DivisionProxy } from "services/divisions/types";

const useSelectDivisions = () => {
  const history = useHistory();
  const [list, setList] = useState<DivisionProxy[]>([]);
  const [currentDivision, setCurrentDivision] = useState<DivisionProxy>();

  const fetchDivisions = async () => {
    services.divisions.getList().then((execute) => execute(setList));
  };

  useEffect(() => {
    fetchDivisions();
  }, []);

  const onSubmit = () => {
    storage.set(CURRENT_DIVISION, currentDivision);

    history.push("/select-training");
  };

  const openModal = (division: DivisionProxy) => {
    console.log("ABRIR A MODAL PARA A DIVISÃO:", division);
  };

  return {
    list,
    onSubmit,
    openModal,
    currentDivision,
    setCurrentDivision,
    canSubmit: !!currentDivision,
  };
};

export default useSelectDivisions;
