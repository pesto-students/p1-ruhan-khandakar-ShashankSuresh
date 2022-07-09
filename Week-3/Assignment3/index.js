function functionCreateIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = functionCreateIncrement();

increment();
increment();
increment();
log(); // Count is 0

/* 
    Answer Details: 
        When we execute functionCreateIncrement this function at line number 13
        it's create a execution context, here all the variables are assigned to memory.
        so the message variable is being created with "Count is 0" value, 
        but when we increment count by calling "increment" function it actually increment the count,
        but it won't change the value of the message variable.

        PS: "log" function getting the access of "message" variable, even after "functionCreateIncrement" function popped out from it's
        execution context, it's just because of closure
*/
