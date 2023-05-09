class Heap {
	constructor() {
		this.heap = []
	}

	insert(value) {
		if (this.heap.length === 0) {
			this.heap[0] = value
		} else {
			let index = this.heap.length
			this.heap[index] = value
			while (
				index > 0 &&
				this.heap[Math.floor(index / 2)] < this.heap[index]
			) {
				let temp = this.heap[Math.floor(index / 2)]
				this.heap[Math.floor(index / 2)] = this.heap[index]
				this.heap[index] = temp
				index = Math.floor(index / 2)
			}
		}
	}

	maxHeapify(arr = [], i) {
		let left = 2 * i + 1
		let right = 2 * i + 2
		let largest = i

		// case 1 : find largest among root, left and right
		if (left < arr.length && arr[left] > arr[i]) largest = left
		if (right < arr.length && arr[right] > arr[largest]) largest = right

		// case 2 : if largest is not root swap and continue heapify

		if (largest != i) {
			let temp = arr[i]
			arr[i] = arr[largest]
			arr[largest] = temp

			this.maxHeapify(arr, largest)
		}
	}
	maxHeapify(arr = [], size = arr.length, index) {
		let left = 2 * index + 1
		let right = 2 * index + 2
		let largest = index

		if (left < size && arr[left] > arr[index]) largest = left

		if (right < size && arr[right] > arr[largest]) largest = right

		if (largest != index) {
			this.swap(arr, index, largest)
			this.maxHeapify(arr, size, largest)
		}
	}
	buildMaxHeap(arr = []) {
		for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
			console.log(i)
			console.log(arr[i])
			this.maxHeapify(arr, i)
		}
	}
	swap(arr, i, j) {
		return ([arr[j], arr[i]] = [arr[i], arr[j]])
	}
	extractMax(arr = []) {
		let max = arr[0]
		arr[0] = arr[arr.length - 1]
		arr.length = arr.length - 1
		this.maxHeapify(arr, 0)
		return max
	}

	buildHeap(arr = []) {
		for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
			this.maxHeapify(arr, arr.length, i)
		}
	}

	//O(n log n)
	heapSort(arr = []) {
		this.buildHeap(arr)

		for (let i = arr.length - 1; i >= 0; i--) {
			let temp = arr[i]
			arr[i] = arr[0]
			arr[0] = temp

			this.maxHeapify(arr, i - 1, 0)
		}
	}
}
let heap = new Heap()

// const maxHeap = new Heap()
// maxHeap.insert(10)
// maxHeap.insert(50)
// maxHeap.insert(100)
// maxHeap.insert(60)
// maxHeap.insert(30)
// maxHeap.insert(90)
// maxHeap.insert(70)
// maxHeap.insert(80)
// maxHeap.insert(40)
// maxHeap.insert(20)

let max = [10, 30, 20, 100, 40, 60, 12, 200]

heap.heapSort(max)
console.log(max)
