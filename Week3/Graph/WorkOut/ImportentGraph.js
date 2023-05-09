class Graph {
	constructor() {
		this.adjacencyList = {}
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = new Set()
		}
	}

	addEdge(vertexOne, vertexTwo) {
		if (!this.adjacencyList[vertexOne]) {
			this.adjacencyList[vertexOne] = new Set()
		}
		if (!this.adjacencyList[vertexTwo]) {
			this.adjacencyList[vertexTwo] = new Set()
		}

		this.adjacencyList[vertexOne].add(vertexTwo)
		this.adjacencyList[vertexTwo].add(vertexOne)
	}

	hasEdge(vertexOne, vertexTwo) {
		return (
			this.adjacencyList[vertexOne].has(vertexTwo) &&
			this.adjacencyList[vertexTwo].has(vertexOne)
		)
	}

	removeEdge(vertexOne, vertexTwo) {
		this.adjacencyList[vertexOne].delete(vertexTwo)
		this.adjacencyList[vertexTwo].delete(vertexOne)
	}

	removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			return
		}
		for (let adjacentVertex of this.adjacencyList[vertex]) {
			this.removeEdge(vertex, adjacentVertex)
		}
		delete this.adjacencyList[vertex]
	}

	display() {
		for (let vertex in this.adjacencyList) {
			console.log(`${vertex} --> ${[...this.adjacencyList[vertex]]}`)
		}
	}

	allValidPaths(start, end) {
		let visited = {}
		let result = []
		let adjList = this.adjacencyList

		function DFSearch(start, arr = []) {
			arr.push(start)
			visited[start] = true

			if (start === end) result.push(arr)
			for (let item of adjList[start]) {
				if (!visited[item]) {
					visited[item] = true
					DFSearch(item, [...arr])
				}
			}
			visited[start] = false
		}
		DFSearch(start)
		return result
	}
}

const myGraph = new Graph()
// myGraph.addVertex('A');
// myGraph.addVertex('B');
// myGraph.addVertex('C');

// myGraph.addEdge('D' , 'E');
// myGraph.addEdge('F' , 'G');c
// myGraph.addEdge('H' , 'I');

// myGraph.addEdge('A' , 'B');
// myGraph.addEdge('B' , 'C');

// myGraph.display()

// console.log(myGraph.hasEdge('A' , 'B'));
// console.log(myGraph.hasEdge('B' , 'A'));

// myGraph.removeVertex('B');
// myGraph.addEdge("A", "B")
// myGraph.addEdge("A", "D")
// myGraph.addEdge("C", "D")
// myGraph.addEdge("B", "D")
// myGraph.addEdge("E", "D")
// myGraph.addEdge("E", "A")

// console.log(myGraph.allValidPaths("A", "E"))

console.log(myGraph)

// myGraph.removeEdge('A' , 'B');

// console.log(myGraph);

myGraph.addEdge('A', 'B')
myGraph.addEdge('B', 'C')
myGraph.addEdge('C', 'D')
myGraph.addEdge('B', 'D')
myGraph.addEdge('D', 'A')

console.log(myGraph)
console.log(myGraph.allValidPaths('A', 'C'))
