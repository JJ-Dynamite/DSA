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
		this.size = 0
	}

	addAtFirst(data) {
		//O(1)
		const newNode = new Node(data)
		this.size++
		if (this.head == null) return (this.head = this.tail = newNode)
		newNode.next = this.head
		this.head = newNode
	}
	removeAtFirst() {
		//special case
		if (this.size == 0) {
			console.log('LinkedList is Empty')
			return -1
		} else if (this.size == 1) {
			this.head = this.tail = null
		}

		this.head = this.head.next
		this.size--
	}

	printList() {
		//O(n)
		let current = this.head
		let outPut = ''

		while (current) {
			outPut += `${current.data} -> `
			current = current.next
		}
		outPut += this.head == null ? 'linkedLest is Empty' : 'null'
		console.log(outPut)
	}
	removeAtLast() {
		//special case
		if (this.size == 0) {
			return console.log('LinkedList is Empty')
		} else if (this.size == 1) {
			this.head = this.tail = null
			this.size = 0
		}

		let prev = this.head
		for (let i = 0; i < this.size - 2; i++) {
			prev = prev.next
		}
		prev.next = null
		this.tail = prev
		this.size--
	}
	 removeWithValue(n) {
		//special case
		if (this.size == 0) {
		  this.head = this.head.next
		  return
		}
	  
		let prev = this.head
		let i = 1
		let iToFind = this.size - n
		while (i < iToFind) {
		  prev = prev.next
		  i++
		}
	  
		//check if the index is valid
		if (iToFind < 0) {
		  throw new Error("Index out of bounds")
		}
	  
		//remove the node at index i
		prev.next = prev.next.next
	  }
}
let list = new LinkedList()
console.log(`add elements in a linkedList addAtFirst :\n`)
list.addAtFirst(1)
list.addAtFirst(3)
list.addAtFirst(5)
list.addAtFirst(5)
list.addAtFirst(4)
list.printList()

console.log(
	`\nSize : ${list.size}\n\n remove elements in a linkedList :\n removeAtFirst ,removeAtLast and removeAtIndex :`
)
list.removeAtFirst()
list.removeAtLast()
list.removeWithValue(3)
list.printList()

console.log(`\n Size : ${list.size}`)
