class Node {
	constructor(value) {
		this.value = value
		this.height = 1
		this.left = null
		this.right = null
	}
}

class AVLTree {
	constructor() {
		this.root = null
	}

	getHeight(node) {
		if (node === null) {
			return 0
		}

		return node.height
	}

	getBalanceFactor(node) {
		if (node === null) {
			return 0
		}

		return this.getHeight(node.left) - this.getHeight(node.right)
	}

	rotateRight(node) {
		const leftChild = node.left
		const rightChildOfLeftChild = leftChild.right

		leftChild.right = node
		node.left = rightChildOfLeftChild

		node.height =
			Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
		leftChild.height =
			Math.max(
				this.getHeight(leftChild.left),
				this.getHeight(leftChild.right)
			) + 1

		return leftChild
	}

	rotateLeft(node) {
		const rightChild = node.right
		const leftChildOfRightChild = rightChild.left

		rightChild.left = node
		node.right = leftChildOfRightChild

		node.height =
			Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
		rightChild.height =
			Math.max(
				this.getHeight(rightChild.left),
				this.getHeight(rightChild.right)
			) + 1

		return rightChild
	}

	insert(value) {
		const newNode = new Node(value)

		if (this.root === null) {
			this.root = newNode
			return this
		}

		this.root = this.#insertNode(this.root, newNode)
		return this
	}

	#insertNode(currentNode, newNode) {
		if (newNode.value < currentNode.value) {
			if (currentNode.left === null) {
				currentNode.left = newNode
			} else {
				currentNode.left = this.#insertNode(currentNode.left, newNode)
			}
		} else {
			if (currentNode.right === null) {
				currentNode.right = newNode
			} else {
				currentNode.right = this.#insertNode(currentNode.right, newNode)
			}
		}

		currentNode.height =
			Math.max(
				this.getHeight(currentNode.left),
				this.getHeight(currentNode.right)
			) + 1

		const balanceFactor = this.getBalanceFactor(currentNode)

		if (balanceFactor > 1 && newNode.value < currentNode.left.value) {
			return this.rotateRight(currentNode)
		}

		if (balanceFactor > 1 && newNode.value > currentNode.left.value) {
			currentNode.left = this.rotateLeft(currentNode.left)
			return this.rotateRight(currentNode)
		}

		if (balanceFactor < -1 && newNode.value > currentNode.right.value) {
			return this.rotateLeft(currentNode)
		}

		if (balanceFactor < -1 && newNode.value < currentNode.right.value) {
			currentNode.right = this.rotateRight(currentNode.right)
			return this.rotateLeft(currentNode)
		}

		return currentNode
	}
}

const avlTree = new AVLTree()

avlTree.insert(10)
avlTree.insert(20)
avlTree.insert(30)
avlTree.insert(40)
avlTree.insert(50)
avlTree.insert(25)

console.log(avlTree.root.value) // 30
console.log(avlTree.root.left.value) // 20
console.log(avlTree.root.left.left.value) // 10
console.log(avlTree.root.left.right.value) // 25
console.log(avlTree.root.right.value) // 40
console.log(avlTree.root.right.right.value) // 50
