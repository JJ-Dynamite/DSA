class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}
class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.len = 0
	}

	peek() {
		return this.first
	}

	enqueue(data) {
		const newNode = new Node(data)
		if (this.len === 0) {
			this.first = this.last = newNode
		} else {
			this.last.next = newNode
			this.last = newNode
		}
		this.len++
	}
	dequeue() {
		if (this.len === 0) {
			return null
		} else {
			const dequeued = this.first
			this.first = this.first.next
			this.len--
			return dequeued.data
		}
	}
}
let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.peek())
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
