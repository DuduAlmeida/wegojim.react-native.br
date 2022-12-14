export type ExerciseProxy = {
  id?: string;
  type?: string;
  title?: string;
  series?: string;
  repetitions?: string;
  demonstrationUrl?: string;
  isRepetitionsAText?: boolean;
};

export type ExercisePerDayProxy = {
  id?: string;
  type?: string;
  title?: string;
  listExercises: ExerciseProxy[];
  listAvailableTrainingId?: string[];
};
