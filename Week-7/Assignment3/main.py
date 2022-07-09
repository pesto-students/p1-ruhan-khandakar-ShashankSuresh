""" 
    Detect loop in a linked list
    
    Given a linked list of N nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.
    Example 1:
    Input: 
        N = 4
    value[] = {1,3,4}
    x = 2
    Output: True
    Explanation: In above test case N = 3.The linked list with nodes N = 3 is given. Then value of x=2 is given which means last node is connected with xth node of linked list. Therefore, there exists a loop.
"""

class Node:
    def __init__(self, data = None, next = None):
        self.data = data
        self.next = next
        
class LinkedList:
    def __init__(self):
        self.head = None
        
    def insert(self, data):
        new_node = Node(data)
        if self.head:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
        else:
            self.head = new_node
            
    def print_ll(self):
        current = self.head
        while current:
            print(current.data, end='->')
            current = current.next
            
    def detect_loop(self):
        if not self.head:
            return False
        
        slow = self.head
        fast = self.head
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            
            if slow == fast:
                return True
        return False
        

linked_list = LinkedList()

linked_list.insert(1)
linked_list.insert(3)
linked_list.insert(4)

linked_list.print_ll()
second_node = linked_list.head.next
linked_list.head.next.next = second_node

# linked_list.print_ll() #! Do not run
print()
print(linked_list.detect_loop()) # True


# TC: O(n)
# SC: O(1)