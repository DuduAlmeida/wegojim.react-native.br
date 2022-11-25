export type ExerciseProxy = {
  type?: string;
  title?: string;
  series?: string;
  repetitions?: string;
  demonstrationUrl?: string;
};

export type ExercisePerDayProxy = {
  id?: string;
  type?: string;
  title?: string;
  listExercises: ExerciseProxy[];
  listAvailableTrainingId?: string[];
};
