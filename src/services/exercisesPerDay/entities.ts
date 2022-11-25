import { ExercisePerDayProxy } from "./types";
import { FirebaseResponse } from "./../firebase/types";

export const ExercisesPerDay = (response: any = {}): ExercisePerDayProxy => {
  const listExercises = response?.listExercises || [];
  const listAvailableTrainingId = response?.listAvailableTrainingId || [];

  return {
    listAvailableTrainingId,
    title: response?.title || "",
    id: response?.id || "#id_error",
    listExercises: listExercises.map((item: any, index: number) => ({
      ...item,
      id: index + 1,
    })),
  };
};

export const ExercisesPerDayList = (
  response: FirebaseResponse
): ExercisePerDayProxy[] =>
  Object.entries(response).map(([key, value]) =>
    ExercisesPerDay({
      id: key,
      ...value,
    })
  ) || [];
