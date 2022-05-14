import sys

"""
    Max Sum Contiguous Subarray
    Find the contiguous subarray within an array, A of length N which has the largest sum.Input Format
    The first and the only argument contains an integer array, A. Output Format: Return an integer representing the maximum possible sum of the contiguous subarray.Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000 For example:
    Input 1: A = [1, 2, 3, 4, -10]
    Output 1: 10
"""


def max_sub_arr_sum(arr):
    max_num = -sys.maxsize - 1
    max_ending_point = 0
    
    arr_length = len(arr)
    
    for ind in range(0, arr_length):
        max_ending_point += arr[ind]
        if max_num < max_ending_point:
            max_num = max_ending_point
        if max_ending_point < 0:
            max_ending_point = 0
    return max_num

print(max_sub_arr_sum([1, 2, 3, 4, -10])) # 10
print(max_sub_arr_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4])) # 6

# TC -> O(n)
# SC -> O(1)