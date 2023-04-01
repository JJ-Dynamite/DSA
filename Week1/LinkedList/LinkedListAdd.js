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
	addAtEnd(data) {
		//O(1)
		const newNode = new Node(data)
		this.size++
		if (this.head == null) return (this.head = this.tail = newNode)
		this.tail.next = newNode
		this.tail = newNode
	}

	addAtIndex(index, data) {
		//O (n)

		if (index == 0) return addAtFirst(data)

		let newNode = new Node(data)
		this.size++
		let current = this.head
		let i = 0
		while (i < index - 1) {
			current = current.next
			i++
		}
		newNode.next = current.next
		current.next = newNode
	}

	printList() {
		//O(n)
		let current = this.head
		let outPut = ''

		while (current !== null) {
			outPut += `${current.data} -> `
			current = current.next
		}
		outPut += this.head == null ? 'linkedLest is Empty' : 'null'
		console.log(outPut)
	}

	printListDec() {
		//O(n)
		let current = this.head
		let outPut = ''

		while (current) {
			outPut += `${current.data} -< `
			current = current.next
		}

		console.log(
			this.head == null
				? 'linkedLest is Empty'
				: 'null'.concat(outPut.split('').reverse().join(''))
		)
	}
}

list = new LinkedList()
console.log(`Size : ${list.size}\n`)
list.addAtFirst(5)
list.addAtEnd(4)
list.addAtIndex(2, 9)
console.log(
	`insert elements in a linkedList.\naddAtFirst addAtEnd addAtIndex :\n\nSize : ${list.size}\n`
)

console.log('\nprint Linked List :\n')
list.printList()

console.log('\nprint Linked List in reverse :\n')
list.printListDec()
