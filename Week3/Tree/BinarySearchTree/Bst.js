class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BST {
	constructor() {
		this.root = null
		this.largest = Infinity
		this.close = null
	}

	#isEmpty() {
		return !this.root
	}

	#insertNode(root, newNode) {
		if (newNode.value < root.value) {
			if (!root.left) root.left = newNode
			else this.#insertNode(root.left, newNode)
		} else {
			if (!root.right) root.right = newNode
			else this.#insertNode(root.right, newNode)
		}
	}

	insert(value) {
		const node = new Node(value)
		if (this.#isEmpty()) this.root = node
		else this.#insertNode(this.root, node)
	}

	search(root, Key) {
		if (!root) return false
		if (Key === root?.value) return true

		if (Key < root?.value) return this.search(root?.left, Key)
		else return this.search(root?.right, Key)
	}

	// DFS
	preOrder(root) {
		if (root) {
			console.log(root.value)
			this.preOrder(root.left)
			this.preOrder(root.right)
		}
	}

	inOrder(root) {
		if (root) {
			this.inOrder(root.left)
			console.log(root.value)
			this.inOrder(root.right)
		}
	}

	postOrder(root) {
		if (root) {
			this.postOrder(root.left)
			this.postOrder(root.right)
			console.log(root.value)
		}
	}

	//BFS
	levelOrder() {
		let queue = []
		queue.push(this.root)
		while (queue.length) {
			let current = queue.shift()

			console.log(current.value)
			if (current.left) queue.push(current.left)
			if (current.right) queue.push(current.right)
		}
	}

	minValue(root) {
		if (!root.left) return root.value
		else return this.minValue(root.left)
	}

	maxValue(root) {
		if (!root.right) return root.value
		else return this.maxValue(root.right)
	}

	delete(value) {
		this.root = this.#deleteNode(this.root, value)
	}

	#deleteNode(root, value) {
		if (!root === null) return root

		if (value < root.value) {
			root.left = this.#deleteNode(root.left, value)
		} else if (value > root.value) {
			root.right = this.#deleteNode(root.right, value)
		} else {
			//case 1 : No leaf node
			if (!root.left && !root.right) {
				return null
				//case 2 : one leaf node
			} else if (!root.left) {
				return root.right
			} else if (!root.right) {
				return root.left
			}
			// case 3 : 2 leaf node
			let minVal = this.minValue(root.right)
			root.value = minVal
			root.right = this.#deleteNode(root.right, minVal)
			//delete the minVal from right subtree
		}
		return root
	}

	isBST(root, minValue, maxValue) {
		return this.validateBST(root, minValue, maxValue)
	}

	validateBST(root, minValue, maxValue) {
		if (!root) return true

		if (root.value >= maxValue || root.value <= minValue) return false
		else {
			return (
				this.validateBST(root.left, minValue, root.value) &&
				this.validateBST(root.right, root.value, maxValue)
			)
		}
	}

	closest(root, value) {
		if (!root) {
			return this.close
		}
		if (root.value === value) {
			this.close = root.value
			return root
		} else {
			if (value < root.value) {
				this.difference = Math.abs(value - root.value)
				console.log(this.difference)
				if (this.difference < this.largest) {
					this.largest = this.difference
					this.close = root.value
				}
				return this.closest(root.left, value)
			}
			if (value > root.value) {
				this.difference = Math.abs(value - root.value)
				if (this.difference < this.largest) {
					this.largest = this.difference
					this.close = root.value
				}
				return this.closest(root.right, value)
			}
		}
		return this.close
	}
}

const bst = new BST()

// insertion and searching

bst.insert(10)
bst.insert(20)
bst.insert(5)

console.log(bst.search(bst.root, 5))
console.log(bst.search(bst.root, 10))
console.log(bst.search(bst.root, 20))

console.log(bst.search(bst.root, 200))
console.log(bst.search(bst.root, 110))

console.log(7 > Number.MAX_VALUE)
// Insertion and preOrder

bst.insert(10)
bst.insert(7)
bst.insert(5)
bst.insert(8)
bst.insert(15)
bst.insert(3)
bst.insert(6)

bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(1)

console.log(bst.isBST(bst.root, -Infinity, Infinity))
bst.delete(bst.root, 3)

bst.preOrder(bst.root)
bst.inOrder(bst.root)
bst.postOrder(bst.root)

bst.delete(bst.root, 10)

bst.levelOrder()

console.log(bst.maxValue(bst.root))
console.log(bst.minValue(bst.root))
// Create a sample BST
const root = {
	value: 5,
	left: { value: 3, left: { value: 2 }, right: { value: 4 } },
	right: { value: 7, left: { value: 6 }, right: { value: 8 } },
}

// Test the function
console.log(bst.validateBST(root, -Infinity, Infinity)) // Should log true
// create a binary search tree
const bst1 = new BST()
bst1.insert(5)
bst1.insert(3)
bst1.insert(8)
bst1.insert(1)
bst1.insert(4)
bst1.insert(7)
bst1.insert(9)

// find the closest value to 6 in the BST
const closestValue = bst.closest(6)
console.log(closestValue) // expected output: 7
