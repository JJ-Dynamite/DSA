// Implement a doubly linked list.
//  You will need to implement methods such as push, pop, shift, unshift  , delete and count for the list.

class Node {
	constructor(data, next = null, prev = null) {
		this.data = data
		this.next = next
		this.prev = prev
	}
}
class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	//Unshift
	unshift(data) {
		const newNode = new Node(data)
		this.size++
		if (this.head == null) {
			this.head = this.tail = newNode
		} else {
			newNode.next = this.head
			this.head = this.head.prev = newNode
		}
	}

	//Push
}
let DLL = new DoublyLinkedList()
DLL.unshift(1)
DLL.unshift(2)
console.log(DLL)
