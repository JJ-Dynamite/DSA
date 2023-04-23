const bubbleSort = arr => {
	for (i = 0; i < arr.length; i++) {
		for (j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
		}
	}

	return arr
}

console.log(bubbleSort([4, 2, 1, 5]))
