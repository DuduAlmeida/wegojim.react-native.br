import { TrainingProxy } from "./types";
import { FirebaseResponse } from "./../firebase/types";

export const Training = (response: any = {}): TrainingProxy => {
  const listExercises = response?.listExercises || [];

  return {
    title: response?.title || "",
    id: response?.id || "#id_error",
    type: response?.type || "division",
    description: response?.description || "",
    listExercises: listExercises,
    exercisesTitle: listExercises.reduce((previous: string, current: any) => {
      const text = !!current ? `${current} <br/>` : "";
      return previous + text;
    }, ""),
    divisionId: response?.divisionId || "#id_error",
  };
};

export const TrainingList = (response: FirebaseResponse): TrainingProxy[] =>
  Object.entries(response).map(([key, value]) =>
    Training({
      id: key,
      ...value,
    })
  ) || [];
