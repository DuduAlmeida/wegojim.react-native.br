import { ExercisePerDayProxy } from "./types";
import { FirebaseResponse } from "./../firebase/types";

export const ExercisesPerDay = (response: any = {}): ExercisePerDayProxy => {
  const listExercises = response?.listExercises || [];
  const listAvailableTrainingId = response?.listAvailableTrainingId || [];

  return {
    listExercises,
    listAvailableTrainingId,
    title: response?.title || "",
    id: response?.id || "#id_error",
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
