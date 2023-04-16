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

	add(data) {
		let newNode = new Node(data)
		if (!this.head) {
			this.head = this.tail = newNode
		}
		else{
			newNode.next=this.head
			this.head=newNode
		}
	}

print(){
	let current=this.head
	let outPut=''
	while(current){
		outPut+=`${current.data} -> `
		current=current.next
	}
	console.log(`${outPut}null`)
}


reverse(head=this.head){
if(!head||!head.next){
	return head
}else{

	let newHead=this.reverse(head.next)
	head.next.next=head
	head.next=null
	return newHead
}

}

}
let list = new LinkedList()

list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.reverse()
list.print()
