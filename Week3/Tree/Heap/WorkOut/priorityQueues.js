class PriorityQueue {
	constructor() {
		this.heap = []
	}

	push(value, priority) {
		this.heap.push({ value, priority })
		this.bubbleUp(this.heap.length - 1)
	}

	pop() {
		const max = this.heap[0]
		const end = this.heap.pop()
		if (this.heap.length > 0) {
			this.heap[0] = end
			this.bubbleDown(0)
		}
		return max.value
	}

	bubbleUp(index) {
		const element = this.heap[index]
		while (index > 0) {
			const parentIndex = Math.floor((index + 1) / 2) - 1
			const parent = this.heap[parentIndex]
			if (element.priority <= parent.priority) {
				break
			}
			this.heap[parentIndex] = element
			this.heap[index] = parent
			index = parentIndex
		}
	}

	bubbleDown(index) {
		const element = this.heap[index]
		while (true) {
			const leftChildIndex = (index + 1) * 2 - 1
			const rightChildIndex = (index + 1) * 2
			let leftChild, rightChild
			let swap = null

			if (leftChildIndex < this.heap.length) {
				leftChild = this.heap[leftChildIndex]
				if (leftChild.priority > element.priority) {
					swap = leftChildIndex
				}
			}

			if (rightChildIndex < this.heap.length) {
				rightChild = this.heap[rightChildIndex]
				if (
					(swap === null && rightChild.priority > element.priority) ||
					(swap !== null && rightChild.priority > leftChild.priority)
				) {
					swap = rightChildIndex
				}
			}

			if (swap === null) {
				break
			}

			this.heap[index] = this.heap[swap]
			this.heap[swap] = element
			index = swap
		}
	}

	size() {
		return this.heap.length
	}

	isEmpty() {
		return this.heap.length === 0
	}
}

const pq = new PriorityQueue();
pq.push('foo', 1);
pq.push('bar', 2);
pq.push('baz', 3);
console.log(pq.pop()); // 'baz'
console.log(pq.pop()); // 'bar'
console.log(pq.pop()); // 'foo'
