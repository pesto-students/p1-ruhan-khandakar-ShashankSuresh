export const storeInLocalStorage = (keyName, data) => {
  localStorage.setItem(keyName, JSON.stringify(data));
};
export const getDataFromLocalStorage = (keyName) => {
  return JSON.parse(localStorage.getItem(keyName));
};
