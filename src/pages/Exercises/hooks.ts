import { useEffect, useState } from "react";

import services from "services/index";
import { ExercisePerDayProxy } from "services/exercisesPerDay/types";
import { ExerciseProps, useExercisesProps } from "pages/Exercises/types";

const useExercises = ({ exercise_id = "" }: useExercisesProps) => {
  const [list, setList] = useState<ExerciseProps[]>([]);
  const [exercisePerDay, setExercisePerDay] = useState<ExercisePerDayProxy>();

  const onToggle = (exerciseId: string) => {
    console.log("onToggle", exerciseId);
  };

  const handleFetch = async (exercise_per_day: ExercisePerDayProxy) => {
    const exercises = exercise_per_day?.listExercises || [];
    const exercisesFormatted = exercises.map((exercise) => ({
      exercise,
      isActive: false,
    }));

    setList(exercisesFormatted);
    setExercisePerDay(exercise_per_day);
  };

  const fetchExercisesPerDay = async () => {
    services.exercisesPerDay
      .getOne({ exercise_id })
      .then((execute) => execute(handleFetch));
  };

  useEffect(() => {
    fetchExercisesPerDay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    list,
    onToggle,
    title: exercisePerDay?.title || "",
  };
};

export default useExercises;
