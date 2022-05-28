""" 
    Parenthesis Checker
    Given an expression string x. Examine whether the pairs and the orders of
    “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.
    
    Example 1:
    Input:{([])}
    Output:true
    Explanation:{ ( [ ] ) }. Same colored brackets can form balanced pairs, with 0 number of unbalanced bracket
"""


def is_opening_expression(char):
    return char == "(" or char == "{" or char == "["

def is_matching_brackets(char_one, char_two):
    return (
        (char_one == "(" and char_two == ")") or
        (char_one == "{" and char_two == "}") or
        (char_one == "[" and char_two == "]")
    )

def is_balanced(string):
    stack = []
    
    for char in string:
        if is_opening_expression(char):
            stack.append(char)
        else:
            if not stack:
                return False
            elif not is_matching_brackets(stack.pop(), char):
                return False
                
    if stack:
        return False
    return True

print(is_balanced("{([])}")) #True
print(is_balanced("[(])")) #False

# TC: O(n)
# SC: O(n)