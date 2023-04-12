const binarySearch = (arr, key) => {
	const search = (left, right) => {
		if (left > right) {
			return -1
		}

		const mid = Math.floor((left + right) / 2)

		if (arr[mid] === key) {
			return mid
		} else if (arr[mid] < key) {
			return search(mid + 1, right)
		} else {
			return search(left, mid - 1)
		}
	}

	return search(0, arr.length - 1)
}

const arr = [2, 4, 6, 8, 10]
console.log(binarySearch(arr, 8)) // Output: 3
