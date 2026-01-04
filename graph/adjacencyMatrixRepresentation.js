class Graph {
    constructor(numberOfNodes) {
        this.numberOfNodes = numberOfNodes;
        // Initialize the adjacency matrix with 0s
        this.adjacencyMatrix = Array.from({ length: numberOfNodes }, () => Array(numberOfNodes).fill(0));
    }

    // Method to add an edge between two nodes
    addEdge(node1, node2) {
        this.adjacencyMatrix[node1][node2] = 1; // For directed graphs
        this.adjacencyMatrix[node2][node1] = 1; // For undirected graphs
    }

    // Method to check if there is an edge between two nodes
    hasEdge(node1, node2) {
        return this.adjacencyMatrix[node1][node2] === 1;
    }

    // Method to display the adjacency matrix
    displayMatrix() {
        console.log("Adjacency Matrix:");
        for (let row of this.adjacencyMatrix) {
            console.log(row.join(" "));
        }
    }
}

// Example usage:
const graph = new Graph(4); // Create a graph with 4 nodes
graph.addEdge(0, 1); // Add edge between node 0 and node 1
graph.addEdge(0, 2); // Add edge between node 0 and node 2
graph.addEdge(1, 2); // Add edge between node 1 and node 2
graph.addEdge(2, 3); // Add edge between node 2 and node 3

console.log(graph.hasEdge(3,2)) // true
console.log(graph.hasEdge(3,0)) // false

// Display the adjacency matrix
graph.displayMatrix();

// Adjacency Matrix:
// 0 1 1 0
// 1 0 1 0
// 1 1 0 1
// 0 0 1 0