""" 
    Binary Tree Level Order Traversal
    
    Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e.,from left to right, level by level).
    
    Input: root = [3,9,20,null,null,15,7]
    Output: [[3],[9,20],[15,7]]
    
    
            3
        9       20
            15      7
"""

import queue


class Node:
    def __init__(self,value):
        self.value = value
        self.left = None
        self.right = None
        

class BinaryTree:
    def __init__(self, root):
        self.root = Node(root)
        
    def level_order_traversal(self):
        result = []
        
        if not self.root:
            return result
        
        queue = []
        queue.append(self.root)
        
        while queue:
            curr_size = len(queue)
            curr_list = []
            
            while curr_size:
                # dequeue element
                curr_node = queue.pop(0)
                curr_list.append(curr_node.value)
                curr_size -= 1
                
                if curr_node.left: # left child
                    queue.append(curr_node.left)
                if curr_node.right: # right child
                    queue.append(curr_node.right)
                    
            # Append the currList to answer after each iteration
            result.append(curr_list)
            
        return result


binary_tree = BinaryTree(3)
binary_tree.root.left = Node(9)
binary_tree.root.right = Node(20)
binary_tree.root.right.left = Node(15)
binary_tree.root.right.right = Node(7)

print(binary_tree.level_order_traversal()) #[[3], [9, 20], [15, 7]]