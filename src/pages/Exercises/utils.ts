import { ExerciseProps } from "./types";

export const hasAllExercisesValidated = (list: ExerciseProps[] = []): boolean =>
  list.reduce(
    (previous, current) => (!!current?.isActive ? previous + 1 : previous),
    0
  ) === list.length;
