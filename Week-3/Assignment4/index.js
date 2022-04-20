/* 
    Description:
        when this function executed it creates a new execution context, and this function returns
        it's being popped out from execution context. But after being popped out the push and pop function
        can access the variable of the "createStack" function, because of closure. Basically when "createStack" function 
        returns "push" and "pop" function, these function bundled with it's lexical scope and creates a closure.
        That is why outside of "createStack" function cannot access "items" variable, but it can access only in the function
        which is inside of the "createStack" function
*/
const createStack = () => {
  const items = [];

  return {
    push(item) {
      items.push(item);
    },
    pop() {
      const poppedItem = items.pop();
      console.log(poppedItem);
      return poppedItem;
    },
  };
};

const stack = createStack();

stack.push(10);
stack.push(5);
stack.pop(); // => 5
console.log(stack.items); // undefined
