const selectionSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		let min = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j
			}
		}
		;[arr[i], arr[min]] = [arr[min], arr[i]]
	}

	return arr
}

let res = selectionSort([5, 3, 9, 1, 2])
console.log(`🚀  res:`, res)
