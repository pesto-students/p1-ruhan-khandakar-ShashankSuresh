""" 
    Find if Path Exists in Graph
    
    There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n -1 (inclusive). The edges in the graph are represented as a 2D integer array edges,
    
    where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

    You want to determine if there is a valid path that exists from vertex source to vertex destination.

    Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.
    
    Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
    Output: true
    Explanation: There are two paths from vertex 0 to vertex 2:
    - 0 → 1 → 2
    - 0 → 2

"""

class Graph:
    def __init__(self):
        self.number_of_nodes = 0
        self.adjacent_nodes = {}
        
    def add_vertex(self, node):
        self.adjacent_nodes[node] = []
        self.number_of_nodes += 1
        
    def add_edge(self, node1, node2):
        self.adjacent_nodes[node1].append(node2)
        self.adjacent_nodes[node2].append(node1)
        
    def add_edge_nodes(self, node_edges):
        for node1, node2 in node_edges:
            self.add_vertex(node1)
            self.add_vertex(node2)
        
        for node1, node2 in node_edges:
            self.add_edge(node1, node2)
        
    def show_connections(self):
        all_nodes = self.adjacent_nodes.keys()
        
        for node in all_nodes:
            node_connections = self.adjacent_nodes[node]
            connections = ""

            for vertex in node_connections:
                connections += str(vertex) + " "
            
            print(f"{node} --> {connections}")
            
    def dfs(self, node, end, seen):
        if node == end:
            return True
        if node in seen:
            return False  
         
        seen.add(node)
        
        for _node in self.adjacent_nodes[node]:
            if self.dfs(_node, end, seen):
                return True
        return False
    
    def validate_path(self, start, end):
        seen = set()
        return self.dfs(start, end, seen)
            
my_graph = Graph()
# my_graph.add_vertex('0');
# my_graph.add_vertex('1');
# my_graph.add_vertex('2');
# my_graph.add_vertex('3');
# my_graph.add_vertex('4');
# my_graph.add_vertex('5');
# my_graph.add_vertex('6');
# my_graph.add_edge('3', '1'); 
# my_graph.add_edge('3', '4'); 
# my_graph.add_edge('4', '2'); 
# my_graph.add_edge('4', '5'); 
# my_graph.add_edge('1', '2'); 
# my_graph.add_edge('1', '0'); 
# my_graph.add_edge('0', '2'); 
# my_graph.add_edge('6', '5');

my_graph.add_edge_nodes([[0,1],[1,2],[2,0]])

my_graph.show_connections(); 
print(my_graph.validate_path(0, 2)) # True

print("--------")

my_graph.add_edge_nodes([[0,1],[0,2],[3,5],[5,4],[4,3]])

my_graph.show_connections(); 
print(my_graph.validate_path(0, 5)) # False
