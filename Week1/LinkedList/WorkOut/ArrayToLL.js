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

	arrayToLL(arr) {
		let newNode = new Node(arr[0])
		let current = newNode
		for (let i = 1; i < arr.length; i++) {
			let next = new Node(arr[i])
			current.next = next
			current = next
		}
		this.head = newNode
		this.tail = newNode
	}
}
let list = new LinkedList()
list.arrayToLL([1, 2, 3, 4, 5, 6, 7])
console.log(list)
