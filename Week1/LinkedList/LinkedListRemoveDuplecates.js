class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null
	}

	insertAtEnd(data) {
		let newNode = new Node(data)
		if (!this.head) {
			this.head = newNode
			return
		}
		let current = this.head
		while (current.next) {
			current = current.next
		}
		current.next = newNode
	}

	//remove duplicates with current occurrence
	deleteDuplicates() {
		//remove duplicates
		let current = this.head
		
		let prev = null
		let seenValues = new Set()
		let duplicates = new Set()
		while (current) {
			if (seenValues.has(current.data)) {
		
				duplicates.add(current.data)
				prev.next = current.next
			} else {
				seenValues.add(current.data)
				prev = current
			}
			current = current.next		
			
		}
		//remove current occurrence
		current = this.head
		prev = null
		while (current) {
			if (duplicates.has(current.data)) {
				if (prev) {
					prev.next = current.next
				} else {
					this.head = current.next
				}
			} else {
				prev = current
			}
			current = current.next
		}
	}

	printList() {
		let current = this.head
		while (current) {
			console.log(current.data)
			current = current.next
		}
	}

	
}

let myList = new SinglyLinkedList()
myList.insertAtEnd(1)
myList.insertAtEnd(2)
myList.insertAtEnd(2)
myList.insertAtEnd(3)
myList.insertAtEnd(4)
myList.insertAtEnd(4)


// console.log('Original list:')
// myList.printList()

myList.deleteDuplicates()

console.log('List after deleting duplicates:')
myList.printList()
