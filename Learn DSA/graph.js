// class Graph {
//   constructor() {
//     this.adjacentList = {};
//   }
//   addVertex(node) {
//     this.adjacentList[node] = [];
//   }
//   addEdge(node1, node2) {
//     //undirected graph
//     this.adjacentList[node1].push(node2);
//     this.adjacentList[node2].push(node1);
//   }
//   printGraph() {
//     console.log(this.adjacentList);
//   }
//   DFSRecursive(start) {
//     const result = [];
//     const visited = {};
//     const adjacentList = this.adjacentList

//     function dfs(vertex) {
//       if (!vertex) return null;
//       visited[vertex] = true;
//       result.push(vertex);
//       adjacentList[vertex].forEach((neighbor) => {
//         if (!visited[neighbor]) {
//           return dfs(neighbor);
//         }
//       });
//     };
//     dfs(start)
//     return result;
//   }
//   DFSIterative(start){
//     const stack = [start]
//     const result = []
//     const visited={}
//     let currentVertex;
//     visited[start] = true
    
//     while(stack.length){
//       currentVertex=stack.pop()
//       result.push(currentVertex)

//       this.adjacentList[currentVertex].forEach(neighbor=>{
//         if(!visited[neighbor]){
//           visited[neighbor] = true
//           stack.push(neighbor)
//         }
//       })
//     }
//     return result
//   }
//   BFS(start){
//     const queue = [start]
//     const result = []
//     const visited = {}

//     let currentVertex;
//     visited[start] = true

//     while(queue.length){
//       currentVertex=queue.shift()
//       result.push(currentVertex)

//       this.adjacentList[currentVertex].forEach(neighbor=>{
//         if(!visited[neighbor]){
//           visited[neighbor] = true
//           queue.push(neighbor)
//         }
//       })
//     }
//     return result
//   }
// }

// const myGraph = new Graph();
// myGraph.addVertex("A");
// myGraph.addVertex("B");
// myGraph.addVertex("C");
// myGraph.addVertex("D");
// myGraph.addVertex("E");
// myGraph.addVertex("F");
// myGraph.addEdge("A", "B");
// myGraph.addEdge("A", "C");
// myGraph.addEdge("B", "D");
// myGraph.addEdge("C", "E");
// myGraph.addEdge("D", "E");
// myGraph.addEdge("D", "F");
// myGraph.addEdge("E", "F");
// myGraph.printGraph();
// // console.log(myGraph.DFSIterative("A"));
// console.log(myGraph.DFSRecursive("C"));
// console.log(myGraph.BFS("A"));


class Graph{
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){
    this.adjacencyList[vertex] = []
  }
  addEdge(node1,node2){
    this.adjacencyList[node1].push(node2)
    this.adjacencyList[node2].push(node1)
  }
  DFS(start){
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList

    function dfs(vertex){
      if(!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      adjacencyList[vertex].forEach(element => {
        if(!visited[element]){
          return dfs(element)
        }
      });
    }
    dfs(start)
    return result
  }
  BFS(start){
    const queue = [start]
    const visited = {}
    const result = []
    visited[start] = true
    let currentIndex;
    while(queue.length){
      currentIndex = queue.shift()
      result.push(currentIndex)
      this.adjacencyList[currentIndex].forEach(neighbor=>{
        if(!visited[neighbor]){
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }
    return result
  }
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addVertex("E");
myGraph.addVertex("F");
myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "D");
myGraph.addEdge("C", "E");
myGraph.addEdge("D", "E");
myGraph.addEdge("D", "F");
myGraph.addEdge("E", "F");
console.log(myGraph);
// myGraph.printGraph();
// console.log(myGraph.DFSIterative("A"));
// console.log(myGraph.DFS("C"));
console.log(myGraph.BFS("A"));