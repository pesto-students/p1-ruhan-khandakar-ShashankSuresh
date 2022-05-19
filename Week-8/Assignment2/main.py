"""
    Validate a Binary Tree
    
    Given the root of a binary tree, determine if it is a valid binary search tree (BST).
    
    A valid BST is defined as follows:
    
    The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees.
    
    Input: root = [2,1,3]
    Output: true
    
            2
        1       3
        
            5
        1       4
            3       6
        Output: false
"""

class Node:
    def __init__(self,value):
        self.value = value
        self.left = None
        self.right = None
        
class BinaryTree:
    def __init__(self, root):
        self.root = Node(root)
        
    def is_valid_bst(self):
        
        def valid_check(node, left, right):
            if not node:
                return True
            if not(node.value < right and node.value > left):
                return False
            return (
                valid_check(node.left, left, node.value) and
                valid_check(node.right, node.value, right)
            )
        
        is_valid = valid_check(self.root, float('-inf'), float('inf'))
        return is_valid

        
binary_tree = BinaryTree(2)
binary_tree.root.left = Node(1)
binary_tree.root.right = Node(3)


print(binary_tree.is_valid_bst()) # True

        
binary_tree_2 = BinaryTree(5)
binary_tree_2.root.left = Node(1)
binary_tree_2.root.right = Node(4)
binary_tree_2.root.right.left = Node(3)
binary_tree_2.root.right.right = Node(6)


print(binary_tree_2.is_valid_bst()) # False