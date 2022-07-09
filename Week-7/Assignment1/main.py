""" 
    Reverse the Linked list
    
    Given a linked list of N nodes. The task is to reverse this list.
    
    Example 1:
    Input:
    LinkedList: 1->2->3->4->5->6
    Output: 6 5 4 3 2 1
    Explanation: After reversing the list,
    elements are 6->5->4->3->2->1.
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
            
    def reverse_list(self):
        previous = None
        current = self.head
        next_node = current.next
        
        while current:
            current.next = previous
            previous = current
            current = next_node
            if next_node:
                next_node = next_node.next
                
        self.head = previous
            
linked_list = LinkedList()

linked_list.insert(1)
linked_list.insert(2)
linked_list.insert(3)
linked_list.insert(4)
linked_list.insert(5)
linked_list.insert(6)

linked_list.print_ll()

linked_list.reverse_list() 
print()
linked_list.print_ll()

# TC: O(n)
# SC: O(1)