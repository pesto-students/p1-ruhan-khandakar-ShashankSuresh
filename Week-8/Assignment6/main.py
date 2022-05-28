""" 
    All Path from source to target
    
    Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.
    
    The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e.,there is a directed edge from node i to node graph[i][j]).
    
    Input: graph = [[1,2],[3],[3],[]]
    Output: [[0,1,3],[0,2,3]]
    Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
    
    
    Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
    Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
"""

def get_all_paths_sources_target(graph):
    queue = [
        [0]
    ]
    result = []
    target = len(graph) - 1
    
    while queue:
        # print("queue", queue)
        popped_node = queue.pop(0)
        # print("popped_node", popped_node)
        # check last node
        if popped_node[-1] == target:
            result.append(popped_node)
        else:
            # print("graph[popped_node[-1]]", graph[popped_node[-1]])
            # otherwise look neighbor nodes
            for neighbor in graph[popped_node[-1]]:
                queue.append(popped_node + [neighbor])
            
    return result

print(get_all_paths_sources_target([[1,2],[3],[3],[]])) #[[0, 1, 3], [0, 2, 3]]
print(get_all_paths_sources_target( [[4,3,1],[3,2,4],[3],[4],[]])) #[[0, 4], [0, 3, 4], [0, 1, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4]]