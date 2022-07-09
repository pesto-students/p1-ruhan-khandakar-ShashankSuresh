""" 
    Maximum Depth of Binary Tree
    
    Given the root of a binary tree, return its maximum depth.A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
    
    Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: 3

"""

class Node:
    def __init__(self,value):
        self.value = value
        self.left = None
        self.right = None
        

class BinaryTree:
    def __init__(self, root):
        self.root = Node(root)
        
    def max_depth(self, root):
        if not root:
            return 0
        left_depth = self.max_depth(root.left)
        right_depth = self.max_depth(root.right)
        
        return 1 + max(left_depth, right_depth)
        
"""
            3
        9       20
            15     7

"""
binary_tree = BinaryTree(3)
binary_tree.root.left = Node(9)
binary_tree.root.right = Node(20)
binary_tree.root.right.left = Node(15)
binary_tree.root.right.right = Node(7)

res = binary_tree.max_depth(binary_tree.root)
print(res) #3