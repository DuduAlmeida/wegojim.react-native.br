import { TrainingProxy } from "./types";
import { database } from "services/firebase";
import { Training, TrainingList } from "./entities";

const getOne = async ({ event_id }: any): Promise<Function> => {
  const trainingRef = database.ref(`training/${event_id}`);

  const execute = (getData = (_data: TrainingProxy): any => _data) => {
    trainingRef.on("value", (event) => {
      const databaseDivision = event.val();
      const data = Training(
        { id: event_id, ...databaseDivision } ?? { id: event_id }
      );

      getData(data);
    });
  };

  return execute;
};

const getList = async ({ name = "" }) => {
  const trainingRef = database.ref(`training`);

  const filterTrainingByName = (training: TrainingProxy) =>
    !!training?.title
      ? training?.title.toLowerCase().indexOf(name) >= 0
      : false;

  const execute = (getData = (_data: TrainingProxy[]): any => _data) => {
    trainingRef.on("value", (event) => {
      const databaseDivision = event.val();
      let data = TrainingList(databaseDivision ?? {});

      getData(data.filter(filterTrainingByName));
    });
  };

  return execute;
};

export default {
  getOne,
  getList,
};
