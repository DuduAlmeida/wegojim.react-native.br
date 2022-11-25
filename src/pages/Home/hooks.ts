import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import storage from "utils/storage";
import services from "../../services";
import { TrainingProxy } from "services/training/types";
import { ExercisePerDayProxy } from "services/exercisesPerDay/types";
import { CURRENT_TRAINNING, LAST_EXERCISE_PER_DAY } from "constants/storage";

const useHome = () => {
  const history = useHistory();
  const [training, setTraining] = useState<TrainingProxy>();
  const [list, setList] = useState<ExercisePerDayProxy[]>([]);
  const [suggestion, setSuggestion] = useState<ExercisePerDayProxy>();

  const handleFetch = async (exercises: ExercisePerDayProxy[]) => {
    const storedSuggestion: ExercisePerDayProxy = storage.get(
      LAST_EXERCISE_PER_DAY
    );
    const hasToSuggestToUser = !!storedSuggestion?.id;

    if (hasToSuggestToUser) {
    } else {
      setSuggestion(exercises[0]);
      setList(exercises?.slice(1));
    }
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
    suggestion,
    onSelect: (exercise?: ExercisePerDayProxy) =>
      history.push(`/do-exercises/${exercise?.id}`),
  };
};

export default useHome;
