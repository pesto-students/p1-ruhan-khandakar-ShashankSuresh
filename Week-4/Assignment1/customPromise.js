const STATUS = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};
class CustomPromise {
  handlers = [];
  value = undefined;
  status = STATUS.PENDING;

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
    try {
      executor(this._resolve, this._reject);
    } catch (error) {
      this._reject(error);
    }
  }

  _resolve = (value) => {
    this.updateResult(value, STATUS.FULFILLED);
  };

  _reject = (value) => {
    this.updateResult(value, STATUS.REJECTED);
  };

  updateResult = (value, status) => {
    // to make async and for maintaining chaining properly
    setTimeout(() => {
      if (this.status !== STATUS.PENDING) {
        return;
      }

      // check is value is also a promise
      if (value instanceof CustomPromise) {
        return value.then(this._resolve, this._reject);
      }

      this.value = value;
      this.status = status;

      this.executeHandlers();
    }, 0);
  };

  executeHandlers() {
    if (this.status === STATUS.PENDING) {
      return null;
    }

    this.handlers.forEach((handler) => {
      if (this.status === STATUS.FULFILLED) {
        return handler.onSuccess(this.value);
      }
      return handler.onFail(this.value);
    });

    this.handlers = [];
  }

  addHandlers(handlers) {
    this.handlers.push(handlers);
    this.executeHandlers();
  }

  then(successCallbackFunc, failCallbackFunc) {
    return new CustomPromise((resolve, reject) => {
      this.addHandlers({
        onSuccess(value) {
          // if no callbackFunc provided, resolve the value for the next promise chain
          if (!successCallbackFunc) {
            return resolve(value);
          }
          try {
            return resolve(successCallbackFunc(value));
          } catch (err) {
            return reject(err);
          }
        },
        onFail(value) {
          // if no onFail provided, reject the value for the next promise chain
          if (!failCallbackFunc) {
            return reject(value);
          }
          try {
            return resolve(failCallbackFunc(value));
          } catch (err) {
            return reject(err);
          }
        },
      });
    });
  }
  catch(callbackFunc) {
    return this.then(null, callbackFunc);
  }
}

module.exports = CustomPromise;
