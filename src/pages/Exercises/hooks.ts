import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import storage from "utils/storage";
import services from "services/index";
import { hasAllExercisesValidated } from "./utils";
import { LAST_EXERCISE_PER_DAY } from "constants/storage";
import { ExercisePerDayProxy } from "services/exercisesPerDay/types";
import { ExerciseProps, useExercisesProps } from "pages/Exercises/types";

const useExercises = ({ exercise_id = "" }: useExercisesProps) => {
  const history = useHistory();
  const [list, setList] = useState<ExerciseProps[]>([]);
  const [exercisePerDay, setExercisePerDay] = useState<ExercisePerDayProxy>();

  const onSubmit = () => {
    storage.set(LAST_EXERCISE_PER_DAY, exercisePerDay);

    history.push("/home");
  };

  const onToggle = (exerciseId: string) => {
    console.log("onToggle", exerciseId);

    const listUpdated = list.map((exercise) => {
      if (String(exercise?.id) === String(exerciseId))
        return { ...exercise, isActive: !exercise.isActive };

      return exercise;
    });

    setList(listUpdated);
  };

  const handleFetch = async (exercise_per_day: ExercisePerDayProxy) => {
    const exercises = exercise_per_day?.listExercises || [];
    const exercisesFormatted = exercises.map((exercise) => ({
      ...exercise,
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
    if (!!exercise_id) {
      fetchExercisesPerDay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exercise_id]);

  return {
    list,
    onToggle,
    onSubmit,
    title: exercisePerDay?.title || "",
    canSubmit: hasAllExercisesValidated(list),
  };
};

export default useExercises;
