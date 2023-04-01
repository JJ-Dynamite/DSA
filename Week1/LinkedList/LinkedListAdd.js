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
	}

	addAtFirst(data) {
		const newNode = new Node(data)
		if (this.head == null) return (this.head = this.tail = newNode)
		newNode.next = this.head
		this.head = newNode
	}
	addAtEnd(data) {
		const newNode = new Node(data)
		if (this.head == null) return (this.head = this.tail = newNode)
		this.tail.next = newNode
		this.tail = newNode
	}

	printList() {
		let current = this.head
		let outPut = ''

		while (current !== null) {
			outPut += ` ${current.data} -> `
			current = current.next
		}
		outPut += this.head == null ? 'linkedLest is Empty' : 'null'
		console.log(outPut)
	}
}

list = new LinkedList()

// list.addAtFirst(5)
list.addAtEnd(4)
list.printList()
