const wizard = {
  name: "The Wingless Wizard",
  health: 50,
  heal(power1, power2) {
    this.health = power1 + power2;
  },
};

const archer = {
  name: "Hawkeye",
  health: 40,
};

/* 
    Now let suppose archer also have the same "heal" power,
    but here heal is only available in wizard object. To use the "heal"
    function from wizard object we can use .call() function
*/

console.log("1", archer.health); // 40

/* -------------------- .call() ----------------------------------- */

/* 
    we're calling "heal" function, and changing the "this" instance from wizard object to archer object. 
*/
wizard.heal.call(archer, 70, 30);
console.log("2", archer.health); // 100

/* -------------------- .apply() ----------------------------------- */

// .apply() does the same thing as .call() but it supports params as an array
wizard.heal.apply(archer, [60, 40]);
console.log("3", archer.health); // 100

/* -------------------- .bind() ----------------------------------- */

/* 
    .bind() returns a new function with a certain context and params, [call() and .apply() call the function immediately]
    .bind() accepts params just like .call()
*/
const healArcher = wizard.heal.bind(archer, 50, 30);
healArcher();
console.log("4", archer.health); // 80

// Another example, function currying
const multiply = (num1, num2) => num1 * num2;

const multiplyByTen = multiply.bind(null, 10);
console.log(multiplyByTen(3)); // 30

const multiplyByFive = multiply.bind(null, 5);
console.log(multiplyByFive(3)); // 15

/* 
    When are what useful
        ≥ .call() and .apply() for borrowing methods from an object
        ≥ .bind() is useful for us to call function on later point with a certain context or certain "this" keyword
*/
