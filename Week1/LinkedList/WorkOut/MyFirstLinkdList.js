class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}
	travers(idx) {
		let counter = 0
		let current = this.head
		while (counter !== idx) {
			current = current?.next
			counter++
		}
		return current
	}
	append(data) {
		//Code here
		let newNode = { data, next: null }
		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return this
	}
	prepend(data) {
		let newNode = { data, next: null }
		newNode.next = this.head
		this.head = newNode
		this.length++
		return this
	}
	printList() {
		let current = this.head
		let outPut = ``
		while (current.next !== null) {
			outPut += `${current.data} -> `
			current = current.next
		}
		console.log(`${outPut} null`)
		//                             3 -> 10 -> 16 -> 5 ->  null
	}
	insert(idx, data) {
		if (idx >= this.length) {
			return this.append(data)
		}
		let newNode = { data, next: null }
		let current = this.travers(idx - 1)
		newNode.next = current.next
		current.next = newNode
		this.length++
		return this
	}
	remove(idx) {
		let leader = this.travers(idx - 1)
		let unwantedNode = leader?.next
		leader.next = unwantedNode?.next
	}
}

let list = new LinkedList()
