import sys
""" 
    3 sum
    Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.Return the sum of the three integers.Assume that there will only be one solution.
    
    Example: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)
"""

def get_closet_sum(arr, target_num):
    arr.sort()
    
    closet_sum = sys.maxsize
    arr_length = len(arr)
    
    for i in range(arr_length - 2):
        
        left_pointer = i + 1
        right_pointer = arr_length - 1
        
        while left_pointer < right_pointer:
            # Calculate the sum of the current triple nums
            sum = arr[i] + arr[left_pointer] + arr[right_pointer]
            
            if abs(target_num - sum) < abs(target_num - closet_sum):
                closet_sum = sum
                
            if sum > target_num:
                right_pointer -= 1
            else:
                left_pointer += 1
                
    return closet_sum
    

# TC: O(n^2)
# SC: O(1)

res = get_closet_sum([-1, 2, 1, -4], 1)
print("res", res)