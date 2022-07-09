""" 
    Find the Town Judge
    
    In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
    
    If the town judge exists, then: 1. The town judge trusts nobody. 2. Everybody (except for the town judge) trusts the town judge. 3. There is exactly one person that satisfies properties 1 and 2.
    
    You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
    
    Example 1:
    Input: n = 2, trust = [[1,2]]
    Output: 2
    
    Example 2:
    Input: n = 3, trust = [[1,3],[2,3]]
    Output: 3
    
    Example 3:
    Input: n = 3, trust = [[1,3],[2,3],[3,1]]
    Output: -1

"""
def find_judge(n_number, trust_list):
    total_size =  n_number + 1
    trusting_list = [0] * total_size
    trusted_list = [0] * total_size
    
    for person1, person2 in trust_list:
        trusting_list[person1] -= 1
        trusted_list[person2] += 1
        
    # print(trusting_list, trusted_list)
    for i in range(1, total_size):
        if trusting_list[i] == 0 and trusted_list[i] == n_number - 1:
            return i
    return -1
    
print(find_judge(2, [[1,2]])) #2
print('---')
print(find_judge(3, [[1,3],[2,3]])) #3
print('---')
print(find_judge(3, [[1,3],[2,3],[3,1]])) #-1


# TC: O(n)
# SC: O(n)