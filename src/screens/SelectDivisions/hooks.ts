import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIVISIONS_LIST } from "./constants";
import { CURRENT_DIVISION } from "../../constants/storage";
import { useNavigation } from "@react-navigation/native";
import {database} from "../../services/firebase";

export const useSelectDivisions = () => {
  const { navigate } = useNavigation<any>();
  const [list, setList] = useState<any[]>([]);

  const getList = async () => setList(DIVISIONS_LIST);

  const setCurrentDivision = async (division: any) => {
    AsyncStorage.setItem(CURRENT_DIVISION, JSON.stringify(division));

    navigate("SelectTraining");
  };

  useEffect(() => {
    getList();
  }, []);


  useEffect(async () => {

database.ref("rules/division").set([
  {
    title: "A",
    description: "Adicionar descrição da divisão do treino",
    type: "division",
    },
    {
      title: "AB",
      description: "Adicionar descrição da divisão do treino",
      type: "division",
      },
    {
      title: "ABC",
      description: "Adicionar descrição da divisão do treino",
      type: "division",
      },
    {
      title: "ABCD",
      description: "Adicionar descrição da divisão do treino",
      type: "division",
      },
])


database.ref("rules/training").set([
  {
    title: "Posterior 1",
    description: "Adicionar descrição da divisão do treino",
    type: "division",
    },
    {
      title: "Posterior 2",
      description: "Adicionar descrição da divisão do treino",
      type: "division",
      },
    {
      title: "Posterior 3",
      description: "Adicionar descrição da divisão do treino",
      type: "division",
      },
    {
      title: "Inferior 1",
      description: "Adicionar descrição da divisão do treino",
      type: "division",
      },
    {
      title: "Inferior 2",
      description: "Adicionar descrição da divisão do treino",
      type: "division",
      },
    {
      title: "Inferior 3",
      description: "Adicionar descrição da divisão do treino",
      type: "division",
      },
])
  }, [])

  return {
    list,
    setCurrentDivision,
  };
};
