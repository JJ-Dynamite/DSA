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

	//insert at first
    addAtFirst(data) {
		//O(1)
		const newNode = new Node(data)
		this.size++
		if (this.head == null) return (this.head = this.tail = newNode)
		newNode.next = this.head
		this.head = newNode
	}

	//print
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

	// reverse
	reverseList() {
		let prev = null
		let current = this.head
		let next

		while (current) {
			next = current.next
			current.next = prev
			prev = current
			current = next
		}
		this.head = prev
	}
	revPrint(){
		let arr=[]
		let current=this.head
		while(current){
			arr.unshift(`${current.data} -> `)
			current=current.next
		}
		console.log(...arr)
	}
	reverse(){
		let prev=null
		let current=this.head
		let next

		this.head=this.tail
		this.tail=current

		for(let i=0;i<this.size;i++){
			next=current.next
			current.next=prev
			prev=current
			current=next

		}
	}
}

let list = new LinkedList()
list.addAtFirst(1)
list.addAtFirst(2)
list.addAtFirst(3)
list.addAtFirst(4)
list.addAtFirst(5)
list.addAtFirst(6)
// list.reverseList()
// list.revPrint()
list.reverse()
list.printList()
console.log(list);
