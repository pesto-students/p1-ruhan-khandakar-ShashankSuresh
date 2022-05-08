/**
 * @desc Create a simple Javascript function code for addition, subtraction, and multiplication of 2numbers and write the corresponding Jest based tests for it.
 */

const isNumber = (number) => typeof number === "number" && !isNaN(number);

const add = (num1, num2) => {
  if (!isNumber(num1) || !isNumber(num2)) {
    throw new TypeError("Given number must be a number type");
  }
  return num1 + num2;
};

const subtract = (num1, num2) => {
  if (!isNumber(num1) || !isNumber(num2)) {
    throw new TypeError("Given number must be a number type");
  }
  return num1 - num2;
};

const multiply = (num1, num2) => {
  if (!isNumber(num1) || !isNumber(num2)) {
    throw new TypeError("Given number must be a number type");
  }
  return num1 * num2;
};

const division = (num1, num2) => {
  if (!isNumber(num1) || !isNumber(num2)) {
    throw new TypeError("Given number must be a number type");
  }
  if (num2 === 0) {
    throw new Error("Divide by zero.");
  }
  return num1 / num2;
};

module.exports = {
  add,
  subtract,
  multiply,
  division,
};
