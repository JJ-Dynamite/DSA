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
            this.tail=newNode
		}
        return this
	}
}
let list = new LinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)

console.log(list)
