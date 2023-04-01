class Node {
	constructor(data) {
		this.data = data
		this.next = null
		this.prev = null
	}
}
class DoubleLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}
	insertAtFirst(data) {
		let newNode = new Node(data)
		this.size++
		//special cases
		if (this.head === null) {
			this.head = this.tail = newNode
		} else {
			newNode.next = this.head
			this.head.prev = newNode
			this.head = newNode
		}
	}

	print() {
		let current = this.head
		process.stdout.write('null ')
		while (current) {
			process.stdout.write(`${current.data} <-> `)
			current = current.next
		}
		process.stdout.write(' null')
	}
}

dList = new DoubleLinkedList()

dList.insertAtFirst(1)
dList.insertAtFirst(2)
dList.insertAtFirst(3)
dList.insertAtFirst(4)
dList.insertAtFirst(5)
dList.insertAtFirst(6)
dList.print()
console.log(`\n\nSize : ${dList.size}`)
