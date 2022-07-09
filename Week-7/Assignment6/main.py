""" 
    Implement a Queue using 2 stack
    
    Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types (i) 1 x (a query of this type means pushing 'x' into the queue) (ii) 2 (a query of this type means to pop element from queue and print the popped element)
    
    Example 1:
    Input: 5
        1 2
        1 3
        2 
        1 4 
        2
    Output:
        2 3
        
    Explanation:
    In the first testcase
    1 2 the queue will be {2}
    1 3 the queue will be {2 3}
    2 popped element will be 2 the queue will be {3}
    1 4 the queue will be {3 4}
    2 popped element will be 3.
    
    Expected Time Complexity : 
        O(1) for push() and 
        O(N) for pop() or 
        O(N) for push() and 
        O(1) for pop()
    Expected Auxilliary Space : O(1)
"""

class MyQueue:
    def __init__(self):
        self.__stack_1 = []
        self.__stack_2 = []
        
    def push(self, value):
        self.__stack_1.append(value)
    
    def pop(self):
        # print("Queue before popping: ", self.__stack_1)
        while self.__stack_1:
            self.__stack_2.append(self.__stack_1.pop())
            
        popped_value = self.__stack_2.pop()
        
        while self.__stack_2:
            self.__stack_1.append(self.__stack_2.pop())
            
        print("popped_value", popped_value)
        # print("queue after popped", self.__stack_1)
    
queue = MyQueue()

queue.push(2)
queue.push(3)
queue.pop()
queue.push(4)
queue.pop()
