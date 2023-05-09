class Node {
	constructor(data) {
		this.data = data
		this.left = null
		this.right = null
	}
}

function closestValue(root, target) {
	let minDiff = Infinity
	let minDiffKey = -1

	while (root !== null) {
		if (minDiff > Math.abs(root.data - target)) {
			minDiff = Math.abs(root.data - target)
			minDiffKey = root.data
		}

		if (target < root.data) {
			root = root.left
		} else {
			root = root.right
		}
	}

	return minDiffKey
}

let root = new Node(9)
root.left = new Node(4)
root.right = new Node(17)
root.left.left = new Node(3)
root.left.right = new Node(6)
root.left.right.left = new Node(5)
root.left.right.right = new Node(7)
root.right.right = new Node(22)
root.right.right.left = new Node(20)

let k = 18
console.log(closestValue(root, k))
