class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

function findClosestValue(tree, target) {
	return findClosestValueHelper(tree, target, tree.value)
}

function findClosestValueHelper(node, target, closest) {
	// Return closest if null
	if (node === null) return closest 
	// Update closest if necessary
	if (Math.abs(target - node.value) < Math.abs(target - closest)) {
		closest = node.value
	}
	// Recurse left or right
	if (target < node.value) {
		return findClosestValueHelper(node.left, target, closest)
	} else if (target > node.value) {
		return findClosestValueHelper(node.right, target, closest)
	} else {
		return closest 
	}
}

// example usage
const tree = new Node(10)
tree.left = new Node(5)
tree.right = new Node(15)
tree.left.left = new Node(2)
tree.left.right = new Node(5)
tree.right.left = new Node(13)
tree.right.right = new Node(22)
tree.left.left.left = new Node(1)
tree.right.left.right = new Node(14)

console.log(findClosestValue(tree, 12)) // output: 13
