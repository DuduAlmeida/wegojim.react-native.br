function getFromStorage(itemKey) {
  return JSON.parse(localStorage.getItem(itemKey));
}

function setIntoStorage(itemKey, valueStored) {
  return localStorage.setItem(itemKey, JSON.stringify(valueStored));
}

export default {
  get: getFromStorage,
  set: setIntoStorage,
}
