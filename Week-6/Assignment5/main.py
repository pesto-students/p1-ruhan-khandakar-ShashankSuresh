"""
    Pair With Given Difference
    
    Given an one-dimensional unsorted array A containing N integers.You are also given an integer B, find if there exists a pair of elements in the array whose difference is B.Return1 if any such pair exists else return 0. Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105
    
    Input Format First argument is an integer array A of size N. Second argument is an integer B
    Output Format Return 1 if any such pair exists else return 0.
    
    Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78 Input 2: A = [-10, 20] B = 30
    Example Output Output 1: 1 Output 2: 1
    
    Example Explanation Explanation 1: Pair (80, 2) gives a difference of 78. Explanation 2:Pair (20, -10) gives a difference of 30 i.e 20 - (-10) => 20 + 10 => 30
"""

def check_diff(arr, difSum):
    visited_map = {}
    
    for num in arr:
        visited_map[num] = True
        
    for num in arr:
        if (num + difSum) in visited_map:
            return 1
    return 0

# TC: O(n)
# SC: O(n)
    
res = check_diff([5, 10, 3, 2, 50, 80], 78)
res2 = check_diff([-10, 20], 30)
print("res",res) #1
print("res2",res2) #1


# Another approach with O(nlogn) and O(1)
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        
        left_arr = arr[:mid]
        right_arr = arr[mid:]
        
        # Recursive call on each half
        merge_sort(left_arr)
        merge_sort(right_arr)
        
        # Two iterators for traversing the two halves
        i = 0
        j = 0
        # Iterator for the main list
        k = 0
        
        while i < len(left_arr) and j < len(right_arr):
            if left_arr[i] <= right_arr[j]:
              arr[k] = left_arr[i]
              i += 1
            else:
                arr[k] = right_arr[j]
                j += 1
            k += 1
        # For all the remaining values
        while i < len(left_arr):
            arr[k] = left_arr[i]
            i += 1
            k += 1

        while j < len(right_arr):
            arr[k] = right_arr[j]
            j += 1
            k += 1

def binary_search(arr, num):
    low = 0
    high = len(arr) - 1
    mid = 0
 
    while low <= high:
 
        mid = (high + low) // 2
        
        if arr[mid] < num:
            low = mid + 1
        elif arr[mid] > num:
            high = mid - 1
        else:
            return mid
 
    return -1

def check_diff_v2(arr, difSum):
    visited_map = {}
    merge_sort(arr) # TC O(nlogn)
    for num in arr:
        visited_map[num] = True
        
    # Total: O(nlogn)
    for index, num in enumerate(arr):
        is_exists = binary_search(arr[index+1:], num+difSum) # O(logn)
        if is_exists:
            return 1
        
    return 0
    
    
# TC: O(nlogn)
# SC: O(1)
res_v2 = check_diff_v2([5, 10, 3, 2, 50, 80], 78)
res2_v2 = check_diff_v2([-10, 20], 30)
print("res_v2",res_v2) #1
print("res2_v2",res2_v2) #1