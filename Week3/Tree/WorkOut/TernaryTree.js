class TernaryTreeNode {
	constructor(value) {
		this.value = value
		this.left = null
		this.middle = null
		this.right = null
	}
}

class TernaryTree {
	constructor() {
		this.root = null
	}

	insert(value) {
		const newNode = new TernaryTreeNode(value)

		if (!this.root) {
			this.root = newNode
			return
		}

		let currentNode = this.root

		while (currentNode) {
			if (value < currentNode.value) {
				if (!currentNode.left) {
					currentNode.left = newNode
					return
				}
				currentNode = currentNode.left
			} else if (value > currentNode.value) {
				if (!currentNode.right) {
					currentNode.right = newNode
					return
				}
				currentNode = currentNode.right
			} else {
				if (!currentNode.middle) {
					currentNode.middle = newNode
					return
				}
				currentNode = currentNode.middle
			}
		}
	}

	search(value) {
		let currentNode = this.root

		while (currentNode) {
			if (value < currentNode.value) {
				currentNode = currentNode.left
			} else if (value > currentNode.value) {
				currentNode = currentNode.right
			} else {
				return true
			}
		}

		return false
	}
}

const tree = new TernaryTree()

// Insert some values into the tree
tree.insert(5)
tree.insert(2)
tree.insert(8)
tree.insert(4)
tree.insert(7)
tree.insert(6)
tree.insert(1)

// Search for some values in the tree
console.log(tree.search(5)) // true
console.log(tree.search(8)) // true
console.log(tree.search(2)) // true
console.log(tree.search(4)) // true
console.log(tree.search(7)) // true
console.log(tree.search(6)) // true
console.log(tree.search(1)) // true
console.log(tree.search(3)) // false
console.log(tree.search(9)) // false
console.log(tree.search(0)) // false
