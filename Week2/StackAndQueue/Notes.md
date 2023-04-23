**Stack using a linked list:**

```javascript
// create a node class
class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

// create a stack class
class Stack {
	constructor() {
		this.top = null // the head of the linked list
		this.bottom = null // the tail of the linked list
		this.length = 0 // the size of the stack
	}

	// check the top element of the stack
	peek() {
		return this.top
	}

	// add an element to the top of the stack
	push(value) {
		// create a new node with the value
		const newNode = new Node(value)
		// if the stack is empty, set the top and bottom to the new node
		if (this.length === 0) {
			this.top = newNode
			this.bottom = newNode
		} else {
			// otherwise, set the next of the new node to the current top
			newNode.next = this.top
			// and set the top to the new node
			this.top = newNode
		}
		// increment the length
		this.length++
		// return the stack
		return this
	}

	// remove an element from the top of the stack
	pop() {
		// if the stack is empty, return null
		if (this.length === 0) {
			return null
		}
		// get the current top node
		const topNode = this.top
		// if the stack has only one node, set the top and bottom to null
		if (this.length === 1) {
			this.top = null
			this.bottom = null
		} else {
			// otherwise, set the top to the next of the current top
			this.top = this.top.next
		}
		// decrement the length
		this.length--
		// return the value of the removed node
		return topNode.value
	}
}
```

**Queue using a linked list**

```javascript
// create a node class
class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

// create a queue class
class Queue {
	constructor() {
		this.first = null // the head of the linked list
		this.last = null // the tail of the linked list
		this.length = 0 // the size of the queue
	}

	// check the first element of the queue
	peek() {
		return this.first
	}

	// add an element to the end of the queue
	enqueue(value) {
		// create a new node with the value
		const newNode = new Node(value)
		// if the queue is empty, set the first and last to the new node
		if (this.length === 0) {
			this.first = newNode
			this.last = newNode
		} else {
			// otherwise, set the next of the current last to the new node
			this.last.next = newNode
			// and set the last to the new node
			this.last = newNode
		}
		// increment the length
		this.length++
		// return the queue
		return this
	}

	// remove an element from the front of the queue
	dequeue() {
		// if the queue is empty, return null
		if (this.length === 0) {
			return null
		}
		// get the current first node
		const firstNode = this.first
		// if the queue has only one node, set the first and last to null
		if (this.length === 1) {
			this.first = null
			this.last = null
		} else {
			// otherwise, set the first to the next of current first
			this.first = this.first.next
		}
		// decrement length
		this.length--
		// return value of removed node
		return firstNode.value
	}
}
```
