class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class Stack {
	constructor() {
		this.top = null
		this.bottom = null
		this.length = 0
	}
	peek() {
		return this.top
	}
	push(data) {
		let newNode = new Node(data)
		if (this.length === 0) {
			this.top = this.bottom = newNode
		} else {
			newNode.next = this.top
			this.top = newNode
		}
		this.length++
		return this
	}
	pop() {
		if (this.length === 0) {
			return null
		}
		const topNode = this.top
		if (this.length === 1) {
			this.top = this.bottom = null
		} else {
			this.top = this.top.next
		}
		this.length--
		return topNode.value
	}
}
let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.peek())
stack.pop()
stack.pop()
stack.pop()
stack.pop()
