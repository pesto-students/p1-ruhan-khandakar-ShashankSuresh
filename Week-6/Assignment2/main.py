""" 
    Spiral Order Matrix II
        Problem Description Given a matrix of m * n elements (m rows, n columns), return all elements of the matrix in spiral order.
        
        Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]
"""

def spiral_order(matrix):
    top = left = direction = 0 # 0 -> left to right, 1 -> top to bottom, 2 -> right to left, 3 -> bottom to top
    bottom = len(matrix) - 1
    right = len(matrix[0]) - 1
    
    result = []
    
    while top <= bottom and left <= right:
        if direction == 0:
            for i in range(left, right+1):
                result.append(matrix[top][i])
            top += 1
        elif direction == 1:
            for i in range(top, bottom+1):
                result.append(matrix[i][right])
            right -= 1
        elif direction == 2:
            for i in range(right, left-1, -1):
                result.append(matrix[bottom][i])
            bottom -= 1
        elif direction == 3:
            for i in range(bottom, top-1, -1):
                result.append(matrix[i][left])
            left += 1
            
        direction = (direction+1) % 4
        
    return result
            
# TC: O(n*m)

res = spiral_order(
    [ 
        [ 1, 2, 3 ], 
        [ 4, 5, 6 ], 
        [ 7, 8, 9 ] 
    ]
)
print(res) # [1, 2, 3, 6, 9, 8, 7, 4, 5]
    
res2 = spiral_order(
    [ 
        [1, 2, 3, 4, 5, 6], 
        [ 7, 8, 9, 10, 11, 12 ], 
        [ 13, 14, 15, 16, 17, 18 ] 
    ]
)
print(res2) # [1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9, 10, 11]
    
    
    