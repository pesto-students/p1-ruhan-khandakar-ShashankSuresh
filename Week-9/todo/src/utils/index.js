export const storeInLocalStorage = (keyName, data) => {
  localStorage.setItem(keyName, JSON.stringify(data));
};
export const getDataFromLocalStorage = (keyName) => {
  return JSON.parse(localStorage.getItem(keyName));
};
export const debounce = (func, wait) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, wait);
  };
};
