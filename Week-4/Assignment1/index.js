/* 
  Implement a function named getNumber which generates a random number. If randomNumber is divisible by 5 it will reject the promise else it will resolve the promise. Let’s also keep the promise resolution/rejection time as a variable.1.JS promises should not be used.2.A custom promise function should be created.3.This function should be able to handle all 3 states Resolve, Reject and Fulfilled.4.Should be able to accept callbacks as props.
*/

const CustomPromise = require("./customPromise");

const getNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  const customPromise = new CustomPromise((resolve, reject) => {
    if (randomNumber % 5 === 0) {
      reject(`Number is divisible by 5, ${randomNumber}`);
    } else {
      resolve(`Number is ${randomNumber}`);
    }
  });

  customPromise.then(console.log).catch(console.error);
};

getNumber();
