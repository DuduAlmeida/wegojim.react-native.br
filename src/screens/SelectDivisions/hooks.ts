import { useEffect, useState } from "react";

import { DIVISIONS_LIST } from "./constants";

export const useSelectDivisions = () => {
  const [list, setList] = useState<any[]>([]);
  const getList = async () => setList(DIVISIONS_LIST);

  useEffect(() => {
    getList();
  }, []);

  return {
    list,
  };
};
