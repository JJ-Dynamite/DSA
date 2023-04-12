const linearSearch = (arr, key, index = 0) => {
	if (arr.length == index) return -1

	if (arr[index] == key) {
		return index
	} else {
		return linearSearch(arr, key, index + 1)
	}
}
let res = linearSearch([1, 2, 3, 4, 5, 6], 4)
console.log(`🚀  res:`, res)
