/* 
    Implement Fibonacci Series with Iterators
*/

const FibSeries = (number) => ({
  i: 1,
  prev: 0,
  _next: 0,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.i++ <= number) {
      const nextNumber = this.prev + this._next || 1;
      [this.prev, this._next] = [this._next, nextNumber];
      return {
        value: this.prev,
        done: false,
      };
    }
    return {
      value: undefined,
      done: true,
    };
  },
});

for (const num of FibSeries(6)) {
  console.log(num);
}
