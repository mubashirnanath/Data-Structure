class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqueue(val,priority){
        this.values.push({val,priority})
        this.sort()
    }
    dequeue(){
        return this.values.shift()
    }
    sort(){
        this.values.sort((a,b=>a.priority - b.priority))
    }
}

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
    Dijkstra(start,finish){
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let path = [] // to return at end
        let smallest;

        // Build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex===start){
                distances[vertex] = 0
                nodes.enqueue(vertex,0)
            }else{
                distances[vertex] = Infinity
                nodes.enqueue(vertex,Infinity)
            }
            previous[vertex] = null
        }
        // as long as there is something to visit
        while(nodes.values.length){
            
        }
    }
}

const graph = new Weightedgraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A","B",4)
graph.addEdge("A","C",2)
graph.addEdge("B","E",3)
graph.addEdge("C","D",2)
graph.addEdge("C","F",4)
graph.addEdge("D","E",3)
graph.addEdge("D","F",1)
graph.addEdge("E","F",1)