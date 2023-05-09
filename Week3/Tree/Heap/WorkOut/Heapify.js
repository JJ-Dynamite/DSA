function heapify(array, index, heapSize) {
	const leftChildIndex = (index + 1) * 2 - 1
	const rightChildIndex = (index + 1) * 2
	let largestIndex = index

	if (
		leftChildIndex < heapSize &&
		array[leftChildIndex] > array[largestIndex]
	) {
		largestIndex = leftChildIndex
	}

	if (
		rightChildIndex < heapSize &&
		array[rightChildIndex] > array[largestIndex]
	) {
		largestIndex = rightChildIndex
	}

	if (largestIndex !== index) {
		const temp = array[index]
		array[index] = array[largestIndex]
		array[largestIndex] = temp
		heapify(array, largestIndex, heapSize)
	}
}
function buildHeap(array) {
	const heapSize = array.length
	const startIndex = Math.floor(heapSize / 2) - 1
	for (let i = startIndex; i >= 0; i--) {
		heapify(array, i, heapSize)
	}
	return array
}

const unsortedArray = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]
const heap = buildHeap(unsortedArray)
console.log(heap) // [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]
