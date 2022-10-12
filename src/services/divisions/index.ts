import { DivisionProxy } from './types';
import { Division, DivisionList } from './entities';
import { database } from "services/firebase";

const getOne = async ({ event_id }: any): Promise<Function> => {
  const divisionRef = database.ref(`division/${event_id}`)

  const execute = (
    getData = (_data: any): DivisionProxy => _data
  ) => {
    divisionRef.on('value', event => {
      const databaseDivision = event.val()
      const data = Division({ id: event_id, ...databaseDivision } ?? { id: event_id, })

      getData(data)
    })
  }

  return execute;
};

const getList = () => {
  const divisionRef = database.ref(`division`);

  const execute = (getData = (_data: any): DivisionProxy[] => _data) => {
    divisionRef.on("value", (event) => {
      const databaseDivision = event.val();
      let data = DivisionList(databaseDivision ?? {});

      getData(data);
    });
  };

  return execute;
};

export default {
  getOne,
  getList,
};
