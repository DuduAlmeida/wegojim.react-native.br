import { ExerciseProps } from "pages/Exercises/types";

export type ExerciseComponentProps = ExerciseProps & {
  onToggle: (exerciseId: string) => void;
};
