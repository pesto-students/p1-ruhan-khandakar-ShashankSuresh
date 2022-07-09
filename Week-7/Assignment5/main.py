""" 
    Next Greater ELement
    
    Given an array arr{} of size N having distinct elements, the task is to find the next greater element for each element of the array in order of their appearance in the array.Next greater element of an element in the array is the nearest element on the right which is greater than the current element. If there does not exist next greater of current element, then next greater element for current element is -1. For example, next greater of the last element is always -1
    
    Example 1:
    Input:
    N = 4, arr[] = [1 3 2 4]
    Output:3 4 4 -1
    Explanation:In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? since it doesn't exist, it is -1.
"""
 
 
# Find the next greater element for every element in a list
def findNextGreaterElements(arr):

    if not arr:
        return
 
    result = [-1] * len(arr)
 
    stack = []
 
    for index, num in enumerate(arr):
        while stack and arr[stack[-1]] < num:
            result[stack[-1]] = num
            stack.pop()

        stack.append(index)
 
    return result
 
 
print(findNextGreaterElements([1, 3, 2, 4])) # [3, 4, 4, -1]

# TC: O(n)
# SC: O(n)