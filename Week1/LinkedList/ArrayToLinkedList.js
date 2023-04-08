class Node {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
}

class linkedList {
	constructor() {
		this.head = null
		this.size = 0
	}
	arrayToLinkedList(arr) {
		this.head = new Node(arr[0])
		let selectedNode = this.head
		for (let i = 1; i < arr.length; i++) {
			selectedNode.next = new Node(arr[i])
			this.size++
			selectedNode = selectedNode.next
		}
		return this.head
	}
}
let list = new linkedList()

let result = list.arrayToLinkedList([3, 1, 2, 3, 4, 5])
console.log(list)
