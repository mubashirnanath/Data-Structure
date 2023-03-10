class Weightedgraph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(node1,node2,weight){
        this.adjacencyList[node1].push({node:node2,weight})
        this.adjacencyList[node2].push({node:node1,weight})
    }
}

const weiGraph = new Weightedgraph()
weiGraph.addVertex("A")
weiGraph.addVertex("B")
weiGraph.addVertex("C")
weiGraph.addVertex("D")
weiGraph.addEdge("A","D",60)
weiGraph.addEdge("B","C",30)
weiGraph.addEdge("C","A",101)
weiGraph.addEdge("D","C",11)
console.log(weiGraph.adjacencyList)