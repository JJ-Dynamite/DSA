
const firstOcc = (arr, key, i = 0) => {
	if (i == arr.length) return -1

	if (key == arr[i]) return i

	return firstOcc(arr, key, i + 1)
}
let res = firstOcc([1, 3, 4, 6, 7, 8, 9, 5], 5)
console.log(`🚀  res:`, res)