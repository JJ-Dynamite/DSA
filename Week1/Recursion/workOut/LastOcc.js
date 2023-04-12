function lastOcc(arr, key, index = 0) {
	if (index == arr.length) return -1
	let isFount = lastOcc(arr, key, index + 1)
	if (isFount == -1 && arr[index] == key) {
		return index
	}
	return isFount
}
let res = lastOcc([1, 2, 3, 4, 5, 4], 4)
console.log(`🚀  res:`, res)
