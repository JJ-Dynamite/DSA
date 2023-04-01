class Node {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
}

function linkedList(arr) {
	let list = new Node(arr[0])
	let selectedNode = list
	for (let i = 1; i < arr.length; i++) {
		selectedNode.next = new Node(arr[i])
		selectedNode = selectedNode.next
	}
	return list
}

let l = [3, 1, 2, 3, 4, 5]
console.log(linkedList(l))
