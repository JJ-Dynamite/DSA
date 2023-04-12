const isSorted = (arr, i = 0) => {
	if (i == arr.length - 1) return true
	if (arr[i] <= arr[i + 1]) {
		return isSorted(arr, i + 1)
	} else {
		return false
	}
}

let res = isSorted([1, 2, 3, 4, 5])
console.log(`🚀  res:`, res)
