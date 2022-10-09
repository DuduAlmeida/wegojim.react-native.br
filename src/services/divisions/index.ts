import { database } from "services/firebase";

const getList = () => {
  const eventsRef = database.ref(`events`);

  // const execute = (getData = (_data: any): EventProxy[] => _data) => {
  //   eventsRef.on("value", (event) => {
  //     const databaseEvent = event.val();
  //     let data = EventList(databaseEvent ?? {});

  //     if (justActive) {
  //       data = data.filter((_event) =>
  //         !!_event.startsAt ? _date.isTodayOrAfter(_event.startsAt) : false
  //       );
  //     }

  //     getData(data);
  //   });
  // };

  // return execute;
};

export default {
  getList,
};
