class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

function isBST(node, min = -Infinity, max = Infinity) {
	// Base case: an empty tree is always a BST
	if (!node) return true

	// Check if the current node's value violates the BST property
	if (node.value < min || node.value > max) {
		return false
	}

	// Recursively check if the left and right subtrees are also BSTs
	return (
		isBST(node.left, min, node.value - 1) &&
		isBST(node.right, node.value + 1, max)
	)
}
// Example tree:
//        5
//       / \
//      2   8
//     / \
//    1   3

const root = new Node(5)
root.left = new Node(2)
root.left.left = new Node(1)
root.left.right = new Node(3)
root.right = new Node(8)

console.log(isBST(root)) // true
