import { TrainingProxy } from "./types";
import { FirebaseResponse } from "./../firebase/types";

export const Training = (response: any = {}): TrainingProxy => ({
  title: response?.title || "",
  id: response?.id || "#id_error",
  type: response?.type || "division",
  description: response?.description || "",
  listExercises: response?.listExercises || [],
  divisionId: response?.divisionId || "#id_error",
});

export const TrainingList = (response: FirebaseResponse): TrainingProxy[] =>
  Object.entries(response).map(([key, value]) =>
    Training({
      id: key,
      ...value,
    })
  ) || [];

export default {};
