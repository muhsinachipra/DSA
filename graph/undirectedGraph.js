class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].delete(vertex2)
            this.adjacencyList[vertex2].delete(vertex1)
        }
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]])
        }
    }

    bfs(startingVertex) {
        const visited = {}
        const queue = [startingVertex]
        while (queue.length) {
            const currentVertex = queue.shift()
            if (!visited[currentVertex]) {
                console.log(currentVertex)
                visited[currentVertex] = true
            }

            for (const adjacentVertex of this.adjacencyList[currentVertex]) {
                if (!visited[adjacentVertex]) {
                    queue.push(adjacentVertex)
                }
            }
        }

        for (const vertex in this.adjacencyList) {
            if (!visited[vertex]) {
                this.bfs(vertex)
            }
        }
    }

    dfs(startingVertex) {
        const visited = {};
        this.dfsHelper(startingVertex, visited);
    }

    dfsHelper(vertex, visited) {
        visited[vertex] = true;
        console.log(vertex);

        for (const neighbor of this.adjacencyList[vertex]) {
            if (!visited[neighbor]) {
                this.dfsHelper(neighbor, visited);
            }
        }
    }

    hasCycle(startingVertex) {
        const visited = new Set();

        const dfs = (vertex, parent) => {
            visited.add(vertex);
            
            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor, vertex)) {
                        return true;
                    }
                } else if (neighbor !== parent) {
                    return true;
                }
            }
            return false;
        };

        return dfs(startingVertex, null);
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('B', 'D');

// console.log(graph.hasCycle('A'))

graph.bfs('C')
console.log('--------------------------------------------------------------------------------------------------------------------------------')
graph.dfs('C')
// graph.display();
// console.log(graph.hasEdge('B', 'A'));

// graph.removeEdge('A', 'B');
// graph.removeVertex('B');
// graph.display();
