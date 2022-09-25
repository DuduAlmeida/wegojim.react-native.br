import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIVISIONS_LIST } from "./constants";
import { CURRENT_DIVISION } from "../../constants/storage";

export const useSelectDivisions = () => {
  const [list, setList] = useState<any[]>([]);

  const getList = async () => setList(DIVISIONS_LIST);

  const setCurrentDivision = async (division: any) => {
    AsyncStorage.setItem(CURRENT_DIVISION, JSON.stringify(division));
  };

  useEffect(() => {
    getList();
  }, []);

  return {
    list,
    setCurrentDivision,
  };
};
