import { DivisionProxy } from "./types";
import { database } from "services/firebase";
import { Division, DivisionList } from "./entities";

const getOne = async ({ event_id }: any): Promise<Function> => {
  const divisionRef = database.ref(`division/${event_id}`);

  const execute = (getData = (_data: DivisionProxy): any => _data) => {
    divisionRef.on("value", (event) => {
      const databaseDivision = event.val();
      const data = Division(
        { id: event_id, ...databaseDivision } ?? { id: event_id }
      );

      getData(data);
    });
  };

  return execute;
};

const getList = async ({ name = "" }) => {
  const divisionRef = database.ref(`division`);

  const filterDivisionByName = (division: any) =>
    division?.title.toLowerCase().indexOf(name) >= 0;

  const execute = (getData = (_data: DivisionProxy[]): any => _data) => {
    divisionRef.on("value", (event) => {
      const databaseDivision = event.val();
      let data = DivisionList(
        databaseDivision?.filter(filterDivisionByName) ?? {}
      );

      getData(data);
    });
  };

  return execute;
};

export default {
  getOne,
  getList,
};
