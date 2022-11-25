import { DivisionProxy } from "./types";
import { database } from "services/firebase";
import { Division, DivisionList } from "./entities";

const getOne = async ({ division_id }: any): Promise<Function> => {
  const divisionRef = database.ref(`division/${division_id}`);

  const execute = (getData = (_data: DivisionProxy): any => _data) => {
    divisionRef.on("value", (event) => {
      const databaseDivision = event.val();
      const data = Division(
        { id: division_id, ...databaseDivision } ?? { id: division_id }
      );

      getData(data);
    });
  };

  return execute;
};

const getList = async ({ name = "" }) => {
  const divisionRef = database.ref(`division`);

  const filterDivisionByName = (division: DivisionProxy) =>
    !!division?.title
      ? division?.title.toLowerCase().indexOf(name) >= 0
      : false;

  const execute = (getData = (_data: DivisionProxy[]): any => _data) => {
    divisionRef.on("value", (event) => {
      const databaseDivision = event.val();
      let data = DivisionList(databaseDivision ?? {});

      getData(data.filter(filterDivisionByName));
    });
  };

  return execute;
};

export default {
  getOne,
  getList,
};
