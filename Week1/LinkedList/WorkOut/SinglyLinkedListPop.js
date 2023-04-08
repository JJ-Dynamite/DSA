class Node {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	push(data) {
		let newNode = new Node(data)
		this.size++
		if (!this.head) {
			this.head = this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		return this
	}
	pop() {
		if (!this.head) return undefined
		let current = this.head
		let newTail = current
		while (current.next) {
			newTail = current
			current = current.next
		}
		this.tail = newTail
		this.tail.next = null
		this.size--
		return current
	}
}
let list = new LinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
let rm = list.pop()

//* 1 -> 2 -> 3 -> null
// ?          c
//?       nt.n=null

console.log(rm)
