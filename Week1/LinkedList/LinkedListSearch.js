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

	insertAtFirst(data) {
		let newNode = new Node(data)
		this.size++
		if (this.head === null) {
			this.head = this.tail = newNode
		} else {
			newNode.next = this.head
			this.head = newNode
		}
	}

	printList() {
		let current = this.head
		let outPut = ''
		while (current) {
			outPut += `${current.data} -> `
			current = current.next
		}
		console.log((outPut += 'null'))
	}

	search(target, idx = 0) {
		let current = this.head
		while (current) {
			if (current.data == target) {
				console.log(`${target} is at index : ${idx}`)
			}
			current = current.next
			idx++
		}
	}

	searchRecursive(head, target, index = 0) {
		if (head == null) return -1

		if (head.data == target)
			return console.log(`${target} is at index : ${index}`)

		return this.searchRecursive(head.next, target, index + 1)
	}
}
let list = new LinkedList()
list.insertAtFirst(1)
list.insertAtFirst(2)
list.insertAtFirst(3)
list.insertAtFirst(4)
list.insertAtFirst(5)
list.printList()
list.search(4)
list.searchRecursive(list.head, 3)
