/*
Clone Graph
https://leetcode.com/problems/clone-graph/description/

Given the head of a graph, return a deep copy (clone) of the graph. Each node in the graph contains a label (int) and a list (List[UndirectedGraphNode]) of its neighbors. There is an edge between the given node and each of the nodes in its neighbors.


OJ's undirected graph serialization (so you can understand error output):
Nodes are labeled uniquely.

We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
 

As an example, consider the serialized graph {0,1,2#1,2#2,2}.

The graph has a total of three nodes, and therefore contains three parts as separated by #.

First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
Second node is labeled as 1. Connect node 1 to node 2.
Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
 

Visually, the graph looks like the following:

       1
      / \
     /   \
    0 --- 2
         / \
         \_/
Note: The information about the tree serialization is only meant so that you can understand error output if you get a wrong answer. 
You don't need to understand the serialization to solve the problem.
*/

/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

// SOLUTION 1 Using DFS
/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  if(!graph)
      return graph;
  
  return dfs(graph, {});
};

var dfs = function(graph, visited) {
  if(visited[graph.label]) 
      return visited[graph.label];
  
  var newNode = new UndirectedGraphNode(graph.label);
  visited[newNode.label] = newNode;
  
  for(var i = 0; i < graph.neighbors.length; i++) {
      const neighbor = dfs(graph.neighbors[i], visited);
      newNode.neighbors.push(neighbor);
  }
  
  return newNode;
}

// SOLUTION 2 Using DFS
var cloneGraphBFS = function(graph) {
    if(graph === null)
        return graph;
    
    var visitedMap = {};
    var queue = [graph];
    var copyReturn = new UndirectedGraphNode(graph.label);
    visitedMap[graph.label] = copyReturn;
    
    while(queue.length > 0) {
        var node = queue.shift();
        var nodeCopied = visitedMap[node.label];
        
        for(var i = 0; i < node.neighbors.length; i++) {
            var neighbor = node.neighbors[i];
            
            if(!visitedMap[neighbor.label]) {
                var copyNeighbor = new UndirectedGraphNode(neighbor.label);
                visitedMap[neighbor.label] = copyNeighbor;
                queue.push(neighbor);
            }
            
            nodeCopied.neighbors.push(visitedMap[neighbor.label]);
        }
    }
    
    return copyReturn;
}
