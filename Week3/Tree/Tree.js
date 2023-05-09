class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(value) {
		let newNode = new Node(value)
		if (!this.root) {
			this.root = newNode
			return this
		}
		let current = this.root
		while (true) {
			if (value === current.value) return undefined
			if (value < current.value) {
				if (!current.left) {
					current.left = newNode
					return this
				}
				current = current.left
			} else {
				if (!current.right) {
					current.right = newNode
					return this
				}
				current = current.right
			}
		}
	}

	find(value) {
		if (!this.root) return false
		let current = this.root
		let found = false
		while (current && !found) {
			if (value < current.value) {
				current = current.left
			} else if (value > current.value) {
				current = current.right
			} else {
				found = true
			}
		}
		if (!found) return false
		return current
	}

	bfsLevelOrder() {
		let node = this.root
		let data = []
		let queue = []
		queue.push(node)
		while (queue.length) {
			node = queue.shift()
			data.push(node.value)
			if (node.left) queue.push(node.left)
			if (node.right) queue.push(node.right)
		}
		return data
	}

	remove(value) {
		if (!this.root) {
			return false
		}

		let current = this.root
		let parent = null
		let isLeftChild = false

		// Find the node to be removed and its parent
		while (current && current.value !== value) {
			parent = current
			if (value < current.value) {
				current = current.left
				isLeftChild = true
			} else {
				current = current.right
				isLeftChild = false
			}
		}

		// If the node was not found, return false
		if (!current) {
			return false
		}

		// If the node has no children, simply remove it
		if (!current.left && !current.right) {
			if (current === this.root) {
				this.root = null
			} else if (isLeftChild) {
				parent.left = null
			} else {
				parent.right = null
			}
		}

		// If the node has only one child, replace it with its child
		else if (!current.left) {
			if (current === this.root) {
				this.root = current.right
			} else if (isLeftChild) {
				parent.left = current.right
			} else {
				parent.right = current.right
			}
		} else if (!current.right) {
			if (current === this.root) {
				this.root = current.left
			} else if (isLeftChild) {
				parent.left = current.left
			} else {
				parent.right = current.left
			}
		}

		// If the node has two children, replace it with its successor
		else {
			let successor = current.right
			let successorParent = current

			while (successor.left) {
				successorParent = successor
				successor = successor.left
			}

			if (successor !== current.right) {
				successorParent.left = successor.right
				successor.right = current.right
			}

			if (current === this.root) {
				this.root = successor
			} else if (isLeftChild) {
				parent.left = successor
			} else {
				parent.right = successor
			}

			successor.left = current.left
		}

		return true
	}

	dfsPreOrder() {
		let data = []
		function traverse(node) {
			data.push(node.value)
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
		}
		traverse(this.root)
		return data
	}

	dfsInOrder() {
		let data = []
		function traverse(node) {
			if (node.left) traverse(node.left)
			data.push(node.value)
			if (node.right) traverse(node.right)
		}
		traverse(this.root)
		return data
	}

	dfsPostOrder() {
		let data = []
		function traverse(node) {
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
			data.push(node.value)
		}
		traverse(this.root)
		return data
	}
}
let bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(13)
bst.insert(11)
bst.insert(2)
bst.insert(16)

console.log(bst.bfsLevelOrder()) // [10, 5, 13, 2, 11, 16]
console.log(bst.dfsPreOrder()) // [10, 5, 2, 13, 11, 16]
console.log(bst.dfsInOrder()) // [2, 5, 10, 11, 13, 16]
console.log(bst.dfsPostOrder()) // [2, 5, 11, 16, 13, 10]

console.log(bst.find(13)) // Node { value: 13, left: Node { value: 11, left: null, right: null }, right: Node { value: 16, left: null, right: null } }

console.log(bst.find(7)) // false
