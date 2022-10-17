export const getIfHasSameId = (first: any = {}, second: any = {}) =>
  !!first?.id && !!second?.id && first.id === second?.id;
