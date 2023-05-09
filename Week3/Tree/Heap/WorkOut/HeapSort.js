function heapSort(array) {
	// Build max-heap
	const heapSize = array.length
	for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
		heapify(array, i, heapSize)
	}

	// Extract the maximum element from the heap and place it at the end of the array
	for (let i = heapSize - 1; i >= 1; i--) {
		const temp = array[0]
		array[0] = array[i]
		array[i] = temp

		heapify(array, 0, i)
	}

	return array
}

function heapify(array, index, heapSize) {
	const left = (index + 1) * 2 - 1
	const right = (index + 1) * 2
	let largest = index

	if (left < heapSize && array[left] > array[largest]) largest = left
	if (right < heapSize && array[right] > array[largest]) largest = right

	if (largest !== index) {
		const temp = array[index]
		array[index] = array[largest]
		array[largest] = temp

		heapify(array, largest, heapSize)
	}
}

const unsortedArray = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]
const sortedArray = heapSort(unsortedArray)
console.log(sortedArray) // [1, 2, 3, 4, 7, 8, 9, 10, 14, 16]
