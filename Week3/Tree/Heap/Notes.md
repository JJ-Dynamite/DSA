**maxHeap**

-   For every node i, the value of node is less than or equal to its parent value `A[Parent(i)] >= A[i]`

**minHeap**

-   for every node i , the value of node is grater than or equal to its parent value `A[parent [i]] <= A[i]`

# **implementation of a binary min heap**

```js
class MinHeap {
	constructor() {
		this.heap = []
	}

	getLeftChildIndex(parentIndex) {
		return 2 * parentIndex + 1
	}

	getRightChildIndex(parentIndex) {
		return 2 * parentIndex + 2
	}

	getParentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2)
	}

	hasLeftChild(index) {
		return this.getLeftChildIndex(index) < this.heap.length
	}

	hasRightChild(index) {
		return this.getRightChildIndex(index) < this.heap.length
	}

	hasParent(index) {
		return this.getParentIndex(index) >= 0
	}

	leftChild(index) {
		return this.heap[this.getLeftChildIndex(index)]
	}

	rightChild(index) {
		return this.heap[this.getRightChildIndex(index)]
	}

	parent(index) {
		return this.heap[this.getParentIndex(index)]
	}

	swap(index1, index2) {
		const temp = this.heap[index1]
		this.heap[index1] = this.heap[index2]
		this.heap[index2] = temp
	}

	peek() {
		if (this.heap.length === 0) {
			return null
		}
		return this.heap[0]
	}

	pop() {
		if (this.heap.length === 0) {
			return null
		}

		const item = this.heap[0]
		this.heap[0] = this.heap[this.heap.length - 1]
		this.heap.pop()
		this.heapifyDown()
		return item
	}

	add(item) {
		this.heap.push(item)
		this.heapifyUp()
	}

	heapifyUp() {
		let index = this.heap.length - 1
		while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
			this.swap(index, this.getParentIndex(index))
			index = this.getParentIndex(index)
		}
	}

	heapifyDown() {
		let index = 0
		while (this.hasLeftChild(index)) {
			let smallerChildIndex = this.getLeftChildIndex(index)
			if (
				this.hasRightChild(index) &&
				this.rightChild(index) < this.leftChild(index)
			) {
				smallerChildIndex = this.getRightChildIndex(index)
			}

			if (this.heap[index] < this.heap[smallerChildIndex]) {
				break
			} else {
				this.swap(index, smallerChildIndex)
			}

			index = smallerChildIndex
		}
	}
}
```

This implementation uses an array to store the elements in the heap, and defines methods to access the parent, left child, and right child of each element in the array based on its index. The `heapifyUp` method is used to move a newly added element up the heap until it is in the correct position, and the `heapifyDown` method is used to move the top element down the heap until it is in the correct position. The `pop` method removes and returns the top element, and the `peek` method returns the top element without removing it. The `add` method adds a new element to the heap. This implementation assumes that the elements in the heap are comparable using the `<` operator.
