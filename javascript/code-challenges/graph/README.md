# Graphs

- A graph is a non-linear data structure that can be looked at as a collection of vertices (or nodes) potentially connected by line segments named edges.

- Here is some common terminology used when working with Graphs:
1. Vertex - A vertex, also called a “node”, is a data object that can have zero or more adjacent vertices.
2. Edge - An edge is a connection between two nodes.
3. Neighbor - The neighbors of a node are its adjacent nodes, i.e., are connected via an edge.
4. Degree - The degree of a vertex is the number of edges connected to that vertex.

## Challenge

- Graph methods: add node, add edge, get nodes,get neighbors, size.

## Approach & Efficiency

- add node 
    - Time Complexity : O(1) 
    - Space Complexity : O(1) 

- add edge
    - Time Complexity : O(1) 
    - Space Complexity : O(1)

- get nodes
    - Time Complexity : O(n)
    - Space Complexity : O(n) 

- get neighbors
    - Time Complexity : O(n) 
    - Space Complexity : O(n) 

- size
    - Time Complexity : O(1) 
    - Space Complexity : O(1) 

## API

- add node
    - Arguments: value
    - Returns: The added node

- add edge
     - Arguments: 2 nodes to be connected by the edge, weight (optional)
     - Returns: nothing

- get nodes
     - Arguments: none
     - Returns all of the nodes in the graph as a collection (set, list, or similar)

- get neighbors
     - Arguments: node
     - Returns a collection of edges connected to the given node

- size
     - Arguments: none
     - Returns the total number of nodes in the graph