import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import storage from "utils/storage";
import { CURRENT_DIVISION } from "constants/storage";

const useSelectDivisions = () => {
  const history = useHistory();
  const [list, setList] = useState<any[]>([]);
  const [currentDivision, setCurrentDivision] = useState<any>();

  const getList = async () => setList([]);

  useEffect(() => {
    getList();
  }, []);

  const onSubmit = () => {
    storage.set(CURRENT_DIVISION, currentDivision);

    history.push("/select-training");
  };

  return {
    list,
    onSubmit,
    setCurrentDivision,
    canSubmit: !!currentDivision,
  };
};

export default useSelectDivisions;
