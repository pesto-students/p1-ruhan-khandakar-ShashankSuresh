class CustomPromise {
  resolvedData;
  rejectedData;

  resolveChain = [];
  rejectChain = [];

  status = "PENDING";

  static resolve(value) {
    return new CustomPromise((resolve) => {
      resolve(value);
    });
  }
  static reject(value) {
    return new CustomPromise((_, reject) => {
      reject(value);
    });
  }

  constructor(executor) {
    executor(this._resolve, this._reject);
  }

  _resolve = (value) => {
    this.resolvedData = value;
    this.status = "FULFILLED";

    if (this.resolveChain.length) {
      // For async resolve function
      this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
    }
  };

  _reject = (value) => {
    this.rejectedData = value;
    this.status = "REJECTED";

    if (this.rejectChain.length) {
      // For async resolve function
      this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
    }
  };

  then(callbackFunc) {
    this.resolveChain.push(callbackFunc);
    if (this.status === "FULFILLED") {
      //   for sync executor
      this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
    }
    return this;
  }
  catch(callbackFunc) {
    this.rejectChain.push(callbackFunc);
    if (this.status === "REJECTED") {
      //   for sync executor
      this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
    }
    return this;
  }
}

const promise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ruhan");
  }, 5000);
});

promise
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });

CustomPromise.resolve("Hello Static Resolve")
  .then((res) => {
    return new CustomPromise((resolve) => {
      resolve("Ruhan");
    });
  })
  .then((res) => {
    console.log("Nested: ", res);
  });
CustomPromise.reject("Hello Static Reject").catch((res) => {
  console.log("res 2", res);
});
