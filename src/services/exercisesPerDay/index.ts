import { ExercisePerDayProxy } from "./types";
import { database } from "services/firebase";
import { ExercisesPerDay, ExercisesPerDayList } from "./entities";

const getOne = async ({ exercise_id = "" }: any): Promise<Function> => {
  const exercisesPerDayRef = database.ref(`exercise/${exercise_id}`);

  const execute = (getData = (_data: ExercisePerDayProxy): any => _data) => {
    exercisesPerDayRef.on("value", (event) => {
      const databaseDivision = event.val();
      const data = ExercisesPerDay(
        { id: exercise_id, ...databaseDivision } ?? { id: exercise_id }
      );

      getData(data);
    });
  };

  return execute;
};

const getList = async ({ training_id = "" }) => {
  const exercisesPerDayRef = database.ref(`exercise`);

  const filterOnlyAvailableByTraining = (exercise: ExercisePerDayProxy) => {
    const isArrayValid =
      !!Array.isArray(exercise?.listAvailableTrainingId) &&
      exercise?.listAvailableTrainingId?.length > 0;
    const hasExerciseIntoTraining = [exercise?.listAvailableTrainingId]
      .flat()
      .includes(training_id);

    return isArrayValid ? hasExerciseIntoTraining : false;
  };

  const execute = (getData = (_data: ExercisePerDayProxy[]): any => _data) => {
    exercisesPerDayRef.on("value", (event) => {
      const databaseDivision = event.val();
      let data = ExercisesPerDayList(databaseDivision ?? {});

      getData(data.filter(filterOnlyAvailableByTraining));
    });
  };

  return execute;
};

export default {
  getOne,
  getList,
};
