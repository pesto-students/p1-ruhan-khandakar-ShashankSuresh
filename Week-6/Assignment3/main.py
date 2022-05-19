"""
    Sort array of 0's,1's and 2's
    
    Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order. 
    Example 1:
        Input: {0 2 1 2 0}
        Output: {0 0 1 2 2}
        
        Input: {0 1 0}
        Output: {0 0 1}
        
"""

def sort_012(arr):
    low = mid = 0
    high = len(arr) - 1
    
    while mid <= high:
        if arr[mid] == 0:
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1
            mid += 1
        elif arr[mid] == 1:
            mid += 1
        elif arr[mid] == 2:
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1
    return arr

# TC: O(n)

print(sort_012([0, 2, 1, 2, 0])) # [0, 0, 1, 2, 2]
print(sort_012([0, 1, 0])) #[0, 0, 1]