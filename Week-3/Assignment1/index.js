/* 
Create a memoize function that remembers previous inputs and stores them in cache so that it won’t have to compute the same inputs more than once. The function will take an unspecified number of integer inputs and a reducer method.
*/

const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = args.toString();
    if (cache.has(key)) {
      console.info("From Cache");
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
};

const add = (...args) => args.reduce((acc, num) => acc + num, 0);

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100)); // 200
console.log(memoizeAdd(100)); // 100
console.log(memoizeAdd(100, 200)); // 300
console.log(memoizeAdd(100, 100)); // 200, but from cache
