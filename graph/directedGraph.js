class DirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return
        }
        this.adjacencyList[vertex1].push(vertex2);
    }

    printGraph() {
        for(let vertex in this.adjacencyList){
            console.log(vertex + ' -> ' + [this.adjacencyList[vertex]]);
        }
    }
}

const graph = new DirectedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

graph.printGraph();