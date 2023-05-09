class Heap {
	constructor() {
		this.heap = []
	}

	maxHeapify(arr = [], n = arr.length, index) {
		let left = 2 * index + 1
		let right = 2 * index + 2
		let largest = index
		console.log(n)
		if (left < n && arr[left] > arr[index]) {
			largest = left
		}
		if (right < n && arr[right] > arr[largest]) {
			largest = right
		}

		if (largest != index) {
			let temp = arr[index]
			arr[index] = arr[largest]
			arr[largest] = temp
			this.maxHeapify(arr, n, largest)
		}
	}

	buildHeap(arr = []) {
		for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
			this.maxHeapify(arr, arr.length, i)
		}
	}

	heapSort(arr = []) {
		this.buildHeap(arr)
		console.log(arr)

		for (let i = arr.length - 1; i >= 0; i--) {
			let temp = arr[i]
			console.log(temp)
			arr[i] = arr[0]
			console.log(arr[i])
			arr[0] = temp
			this.maxHeapify(arr, i - 1, 0)
		}
	}
}

let heap = new Heap()
let arr = [10, 100, 20, 15, 30, 50, 45]
heap.heapSort(arr)
console.log(arr)
