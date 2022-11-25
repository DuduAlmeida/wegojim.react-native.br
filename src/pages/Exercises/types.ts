import { RouteComponentProps } from "react-router";
import { ExerciseProxy } from "services/exercisesPerDay/types";

export type ExerciseProps = ExerciseProxy & {
  isActive: boolean;
};

export interface ExercisesPageProps
  extends RouteComponentProps<{
    exerciseId?: string;
  }> {}

export type useExercisesProps = {
  exercise_id?: string;
};
