class Graph {
	constructor() {
		this.vertices = new Map()
	}

	addVertex(label) {
		if (!this.vertices.has(label)) {
			this.vertices.set(label, new Vertex(label))
		}
	}

	addEdge(startLabel, endLabel, weight = 1) {
		if (this.vertices.has(startLabel) && this.vertices.has(endLabel)) {
			let startVertex = this.vertices.get(startLabel)
			let endVertex = this.vertices.get(endLabel)
			startVertex.addEdge(endVertex, weight)
		}
	}

	dfs(startLabel, callback) {
		if (this.vertices.has(startLabel)) {
			let startVertex = this.vertices.get(startLabel)
			let visited = new Set()
			this.#dfsHelper(startVertex, visited, callback)
		}
	}

	#dfsHelper(vertex, visited, callback) {
		visited.add(vertex)
		callback(vertex)

		for (let neighbor of vertex.neighbors.keys()) {
			if (!visited.has(neighbor)) {
				this.#dfsHelper(neighbor, visited, callback)
			}
		}
	}
	depthFirstRecursive(start) {
		const result = []
		const visited = new Set()
		const adjacencyList = this.adjacencyList
		const dfs = vertex => {
			if (!vertex) return
			visited.add(vertex)
			result.push(vertex)
			adjacencyList[vertex].forEach(neighbor => {
				if (!visited.has(neighbor)) {
					dfs(neighbor)
				}
			})
		}
		dfs(start)
		console.log(result)
	}

	bfs(startLabel, callback) {
		if (this.vertices.has(startLabel)) {
			let startVertex = this.vertices.get(startLabel)
			let visited = new Set()
			let queue = [startVertex]

			while (queue.length > 0) {
				let vertex = queue.shift()
				visited.add(vertex)
				callback(vertex)

				for (let neighbor of vertex.neighbors.keys()) {
					if (!visited.has(neighbor)) {
						visited.add(neighbor)
						queue.push(neighbor)
					}
				}
			}
		}
	}

	dijkstra(startLabel) {
		if (this.vertices.has(startLabel)) {
			let startVertex = this.vertices.get(startLabel)
			let distances = new Map()
			let visited = new Set()
			let priorityQueue = new PriorityQueue()

			distances.set(startVertex, 0)
			priorityQueue.enqueue(startVertex, 0)

			while (!priorityQueue.isEmpty()) {
				let [currentVertex, currentDistance] = priorityQueue.dequeue()

				if (visited.has(currentVertex)) {
					continue
				}

				visited.add(currentVertex)

				for (let [
					neighbor,
					weight,
				] of currentVertex.neighbors.entries()) {
					let distance = currentDistance + weight

					if (
						!distances.has(neighbor) ||
						distance < distances.get(neighbor)
					) {
						distances.set(neighbor, distance)
						priorityQueue.enqueue(neighbor, distance)
					}
				}
			}

			return distances
		}
	}
}

class Vertex {
	constructor(label) {
		this.label = label
		this.neighbors = new Map()
	}

	addEdge(vertex, weight = 1) {
		this.neighbors.set(vertex, weight)
	}
}

class PriorityQueue {
	constructor() {
		this.elements = []
	}

	enqueue(element, priority) {
		this.elements.push({ element, priority })
		this.#sort()
	}

	dequeue() {
		return this.elements.shift()
	}

	isEmpty() {
		return this.elements.length === 0
	}

	#sort() {
		this.elements.sort((a, b) => a.priority - b.priority)
	}
}
let graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'E', 1)
graph.addEdge('D', 'E', 3)

graph.depthFirstRecursive('')
graph.dfs('A', vertex => console.log(vertex.label))

// graph
// console.log('BFS:');
// graph.bfs('A', vertex => console.log(vertex.label));
// console.log('Dijkstra:');
// console.log(graph.dijkstra('A'));
