import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TRAINING_LIST } from "./constants";

import { CURRENT_DIVISION, CURRENT_TRAINING } from "../../constants/storage";
import { useNavigation } from "@react-navigation/native";


export const useSelectTraining = () => {
  const { navigate } = useNavigation<any>();
  const [list, setList] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");

  const getList = async () => setList(TRAINING_LIST);

  const getDivision = async () => {
    const storageDivision = await AsyncStorage.getItem(CURRENT_DIVISION);
    const division = !!storageDivision ? JSON.parse(storageDivision) : null;
    const text = String(division?.title);

    if (!division && !text) return { isValid: false };

    setTitle(text);

    return { isValid: true };
  };

  const setCurrentTraining = async (training: any) => {
    AsyncStorage.setItem(CURRENT_TRAINING, JSON.stringify(training));
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    getDivision().then(({ isValid }) => {
      if (!isValid) return navigate("SelectDivisions");
    });
  }, []);

  return {
    list,
    title,
    setCurrentTraining,
  };
};
