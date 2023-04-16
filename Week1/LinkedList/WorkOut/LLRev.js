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
			this.tail = newNode
		}
		return this
	}
	pop() {
		if (!this.head) return undefined
		let current = this.head
		let newTail = current
		while (current.next) {
			newTail = current
			current = current.next
		}
		this.tail = newTail
		this.tail.next = null
		this.size--
		return current
	}

	// reverse() {
	// 	let prev = null
	// 	let current = this.head
	// 	let next = null
	// 	while (current !== null) {
	// 		next = current.next
	// 		current.next = prev
	// 		prev = current
	// 		current = next
	// 	}
	// 	return prev
	// }

	// findMid(head = this.head) {
	// 	let fast = head
	// 	let slow = head
	// 	while (fast !== null && fast.next !== null) {
	// 		slow = slow.next
	// 		fast = fast.next.next
	// 	}
	// 	return slow
	// }

	// removeDuplicates(head = this.head) {
	// 	let current = head
	// 	while (current && current.next) {
	// 		if (current.data === current.next.data) {
	// 			current.next = current.next.next
	// 		} else {
	// 			current = current.next
	// 		}
	// 	}
	// 	return head
	// }
	// mergeSortedLists(head1, head2) {
	// 	if (head1 === null) {
	// 		return head2
	// 	}
	// 	if (head2 === null) {
	// 		return head1
	// 	}
	// 	if (head1.data < head2.data) {
	// 		head1.next = this.mergeSortedLists(head1.next, head2)
	// 		return head1
	// 	} else {
	// 		head2.next = this.mergeSortedLists(head1, head2.next)
	// 		return head2
	// 	}
	// }
	removeElement(key, head = this.head) {
		let current = head
		let previous = null
		while (current !== null) {
			if (current.data === key) {
				if (previous === null) {
					head = current.next
				} else {
					previous.next = current.next
				}
				break
			}
			previous = current
			current = current.next
		}
		return head
	}

	print() {
		let current = this.head
		let outPut = ``
		while (current) {
			outPut += `${current.data} -> `
			current = current.next
		}
		console.log(`${outPut} null`)
	}
}
let list1 = new LinkedList()
let list2 = new LinkedList()
let mergedList = new LinkedList()

list1.push(1)
list1.push(2)
list1.push(3)
list1.push(3)
list1.push(4)
list1.push(8)
list1.removeElement(3)
list1.print()

// list2.push(5)
// list2.push(6)
// mergedList.head = mergedList.mergeSortedLists(list2.head, list1.head)
// mergedList.print()
// console.log()

// reverse linked list using recursion 
	







	
