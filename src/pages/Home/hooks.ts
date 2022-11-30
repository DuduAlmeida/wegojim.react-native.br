import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import storage from "utils/storage";
import services from "../../services";
import { TrainingProxy } from "services/training/types";
import { ExercisePerDayProxy } from "services/exercisesPerDay/types";
import { CURRENT_TRAINNING, LAST_EXERCISE_PER_DAY } from "constants/storage";
import { useAuthContext } from "contexts/AuthContext";

const useHome = () => {
  const history = useHistory();

  const { logout } = useAuthContext();
  const [training, setTraining] = useState<TrainingProxy>();
  const [list, setList] = useState<ExercisePerDayProxy[]>([]);
  const [suggestion, setSuggestion] = useState<ExercisePerDayProxy>();

  const setListByOrder = (exercises: ExercisePerDayProxy[]) => {
    setSuggestion(exercises[0]);
    setList(exercises?.slice(1));
  };

  const setListBySuggestionPosition = (
    exercises: ExercisePerDayProxy[],
    position: number
  ) => {
    setSuggestion(exercises[position]);
    setList([
      ...exercises.slice(0, position),
      ...exercises.slice(position + 1, exercises.length),
    ]);
  };

  const handleFetch = async (exercises: ExercisePerDayProxy[]) => {
    const storedSuggestion: ExercisePerDayProxy = storage.get(
      LAST_EXERCISE_PER_DAY
    );
    const hasToSuggestToUser = !!storedSuggestion?.id;

    console.log("storedSuggestion", hasToSuggestToUser, storedSuggestion);

    if (hasToSuggestToUser) {
      const suggestionIndex = exercises.findIndex(
        (exercise) => exercise?.id === storedSuggestion?.id
      );

      console.log("suggestionIndex >= 0", suggestionIndex >= 0);

      if (suggestionIndex < 0) return setListByOrder(exercises);
      const newSuggestionPosition =
        suggestionIndex + 1 === exercises.length ? 0 : suggestionIndex + 1;

      console.log(
        "newSuggestionPosition",
        newSuggestionPosition,
        "suggestionIndex",
        suggestionIndex
      );

      return setListBySuggestionPosition(exercises, newSuggestionPosition);
    }

    return setListByOrder(exercises);
  };

  const fetchExercisesPerDay = async () => {
    services.exercisesPerDay
      .getList({ training_id: training?.id })
      .then((execute) => execute(handleFetch));
  };

  useEffect(() => {
    const trainingStored: TrainingProxy = storage.get(CURRENT_TRAINNING);

    setTraining(trainingStored);

    if (!trainingStored || !trainingStored?.id) {
      history.push("/select-divisions");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!!training) {
      fetchExercisesPerDay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [training]);

  return {
    list,
    logout,
    suggestion,
    onSelect: (exercise?: ExercisePerDayProxy) =>
      history.push(`/do-exercises/${exercise?.id}`),
  };
};

export default useHome;
