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
		let newNode = new Node(data)
		this.size++
		// spacial cases
		if (this.size == 0) this.head = this.tail = newNode

		newNode.next = this.head
		this.head = newNode
	}
	print() {
		let current = this.head
		let outStr = ''
		while (current) {
			outStr += `${current.data} -> `
			current = current.next
		}
		outStr += 'null'
		console.log(outStr)
	}

	findMid(head) {
		let fast = head
		let slow = head
		while (fast?.next != null && fast != null) {
			fast = fast?.next?.next
			slow = slow.next
		}
		return slow
	}

	isPalindrome() {
		//spacial case
		if (this.head == null || this.head.next == null) {
			return true
		}
		// find mid
		let mid = this.findMid(this.head)
		// reverse 2nd half
		let prev = null
		let current = mid
		let next
		while (current) {
			next = current.next
			current.next = prev
			prev = current
			current = next
		}
		let right = prev //right head
		let left = this.head //left head
		//check right and left
		while (right) {
			if (right.data != left.data) {
				return false
			}
			right = right.next
			left = left.next
		}
		return true
	}
}
let list = new LinkedList()

list.addAtFirst(4)
list.addAtFirst(3)
list.addAtFirst(4)
// list.reverse()
list.print()

console.log(list.isPalindrome())

