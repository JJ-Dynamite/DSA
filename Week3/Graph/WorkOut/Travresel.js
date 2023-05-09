class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
       if(!this.adjacencyList[vertex]) {
         this.adjacencyList[vertex] = [];
       }
    }

    addEdge(v1 , v2) {
        if(!this.adjacencyList[v1]) {
            this.adjacencyList[v1] = []
        }
        if(!this.adjacencyList[v2]) {
            this.adjacencyList[v2] = []
        }
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1);
    }

    depthFirstRecursive(start) { 
       let result = [];
       let visited = {};
       let adjacensyList = this.adjacencyList;
       function dfs(vertex) {
         if(!vertex) return null
         visited[vertex] = true;
         result.push(vertex);
         adjacensyList[vertex].forEach(neighbour => {
            if(!visited[neighbour]) {
                return dfs(neighbour)
            }
         })
       }
       dfs(start)
       console.log(result)
    }

    depthFirstSearch(start) {
        let stack = [start];
        let result = [];
        let visited = {};
        visited[start] = true ;
        while(stack.length) {
            let currentVertex = stack.pop();
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour); 
                }
            })
        }  
        console.log(result);
    }


    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertex ;
        while(queue.length) {
            currentVertex = queue.shift();
            visited[currentVertex] = true;
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            })
        }

        console.log(result);

    }
    

    display() {
        for(let vertex in this.adjacencyList) {
            console.log(vertex);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');
myGraph.addVertex('E');
myGraph.addVertex('F');

myGraph.addEdge('A' , 'B')
myGraph.addEdge('A' , 'C')
myGraph.addEdge('B' , 'D')
myGraph.addEdge('C' , 'E')
myGraph.addEdge('D' , 'E')
myGraph.addEdge('D' , 'F')
myGraph.addEdge('F' , 'E')

myGraph.depthFirstRecursive('A')
myGraph.depthFirstSearch('A');
myGraph.breadthFirst('A');
myGraph.display();

// console.log(myGraph);
