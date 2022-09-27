import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIVISIONS_LIST } from "./constants";
import { CURRENT_DIVISION } from "../../constants/storage";
import { useNavigation } from '@react-navigation/native';

export const useSelectDivisions = () => {
  const { navigate } = useNavigation<any>();

  console.log(navigate) 


  const [list, setList] = useState<any[]>([]);

  const getList = async () => setList(DIVISIONS_LIST);

  const setCurrentDivision = async (division: any) => {
    AsyncStorage.setItem(CURRENT_DIVISION, JSON.stringify(division));

    navigate('SelectTraining');
  };

  useEffect(() => {
    getList();
  }, []);

  return {
    list,
    setCurrentDivision,
  };
};
