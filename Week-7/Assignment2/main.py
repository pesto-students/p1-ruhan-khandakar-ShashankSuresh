""" 
    Rotate Linked List
    
    Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,where k is a given positive integer smaller than or equal to length of the linked list.
    Example 1
    
    Input:N = 5
    5value[] = {2, 4, 7, 8, 9}
    k = 3
    Output: 8 9 2 4 7
    Explanation
    Rotate 1: 4 -> 7 -> 8 -> 9 -> 2
    Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
    Rotate 3: 8 -> 9 -> 2 -> 4 -> 7
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
            
    def _rotate(self, k):
        if not k:
            return
        
        current = self.head
        
        # current will either point to kth or None
        count = 1
        while count < k and not current:
            current = current.next
            count += 1
            
        # If current is None (k is greater than or equal to count of nodes), so we don't need to rotate
        if not current:
            return
        
        kth_node = current
        
        # current will point to last node
        while current.next:
            current = current.next
            
        # Change next of last node to previous head
        current.next = self.head
        # Change head to (k + 1)th node
        self.head = kth_node.next
        # change next of kth node to None
        kth_node.next = None
      
    def rotate(self, k):
        for i in range(k):
            self._rotate(k)      
        

linked_list = LinkedList()

linked_list.insert(2)
linked_list.insert(4)
linked_list.insert(7)
linked_list.insert(8)
linked_list.insert(9)

linked_list.print_ll()

linked_list.rotate(3)
print()
linked_list.print_ll()
# 8->9->2->4->7->

# TC: O(n)
# SC: O(1)