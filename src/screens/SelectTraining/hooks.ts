import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TRAINING_LIST } from "./constants";
import { CURRENT_TRAINING } from "../../constants/storage";

export const useSelectTraining = () => {
  const [list, setList] = useState<any[]>([]);

  const getList = async () => setList(TRAINING_LIST);

  const setCurrentTraining = async (training: any) => {
    AsyncStorage.setItem(CURRENT_TRAINING, JSON.stringify(training));
  };

  useEffect(() => {
    getList();
  }, []);

  return {
    list,
    setCurrentTraining,
  };
};
