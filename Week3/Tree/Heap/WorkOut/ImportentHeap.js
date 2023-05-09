// Binary Heap Class
class BinaryHeap {
	constructor() {
		this.heap = []
	}

	insert(value) {
		this.heap.push(value)
	}

	extract() {
		return this.heap.pop()
	}

	heapify() {
		let i = Math.floor(this.heap.length / 2) - 1
		while (i >= 0) {
			this.#BubbleDown(i)
			i--
		}
	}

	#BubbleDown(i) {
		let left = 2 * i + 1
		let right = 2 * i + 2
		let max = i
		if (left < this.heap.length && this.heap[left] > this.heap[max])
			max = left
		if (right < this.heap.length && this.heap[right] > this.heap[max])
			max = right
		if (max !== i) {
			;[this.heap[i], this.heap[max]] = [this.heap[max], this.heap[i]]
			this.#BubbleDown(max)
		}
	}
}

// Min Heap Class
class MinHeap extends BinaryHeap {
	constructor() {
		super()
	}

	insert(value) {
		super.insert(value)
		let i = this.heap.length - 1
		while (i > 0 && this.heap[i] < this.heap[Math.floor((i - 1) / 2)]) {
			;[this.heap[i], this.heap[Math.floor((i - 1) / 2)]] = [
				this.heap[Math.floor((i - 1) / 2)],
				this.heap[i],
			]
			i = Math.floor((i - 1) / 2)
		}
	}

	extract() {
		if (this.heap.length === 0) return null
		if (this.heap.length === 1) return this.heap.pop()
		const min = this.heap[0]
		this.heap[0] = this.heap.pop()
		this.#BubbleUp(0)
		return min
	}

	heapify() {
		let i = Math.floor(this.heap.length / 2) - 1
		while (i >= 0) {
			this.#BubbleUp(i)
			i--
		}
	}

	#BubbleUp(i) {
		let parent = Math.floor((i - 1) / 2)
		if (parent >= 0 && this.heap[i] < this.heap[parent]) {
			;[this.heap[i], this.heap[parent]] = [
				this.heap[parent],
				this.heap[i],
			]
			this.#BubbleUp(parent)
		}
	}
}

// Max Heap Class
class MaxHeap extends BinaryHeap {
	constructor() {
		super()
	}

	insert(value) {
		super.insert(value)
		let i = this.heap.length - 1
		while (i > 0 && this.heap[i] > this.heap[Math.floor((i - 1) / 2)]) {
			;[this.heap[i], this.heap[Math.floor((i - 1) / 2)]] = [
				this.heap[Math.floor((i - 1) / 2)],
				this.heap[i],
			]
			i = Math.floor((i - 1) / 2)
		}
	}

	extract() {
		if (this.heap.length === 0) return null
		if (this.heap.length === 1) return this.heap.pop()
		const max = this.heap[0]
		this.heap[0] = this.heap.pop()
		return max
	}

	heapify() {
		let i = Math.floor(this.heap.length / 2) - 1
		while (i >= 0) {
			this.#BubbleDown(i)
			i--
		}
	}

	#BubbleDown(i) {
		let left = 2 * i + 1
		let right = 2 * i + 2
		let max = i
		if (left < this.heap.length && this.heap[left] > this.heap[max])
			max = left
		if (right < this.heap.length && this.heap[right] > this.heap[max])
			max = right
		if (max !== i) {
			;[this.heap[i], this.heap[max]] = [this.heap[max], this.heap[i]]
			this.#BubbleDown(max)
		}
	}
}

// Create instances of the heap classes and test the functionality
let binaryHeap = new BinaryHeap()
binaryHeap.insert(10)
binaryHeap.insert(20)
binaryHeap.insert(30)
console.log(binaryHeap.extract()) // Output: 30

let minHeap = new MinHeap()
minHeap.insert(10)
minHeap.insert(20)
minHeap.insert(30)
console.log(minHeap.extract()) // Output: 10

let maxHeap = new MaxHeap()
maxHeap.insert(10)
maxHeap.insert(20)
maxHeap.insert(30)
console.log(maxHeap.extract()) // Output: 30
