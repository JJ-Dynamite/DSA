// check the array is sorted or not by using array
const checkArray = (arr, i) => {
	if (i == arr.length - 1) return true
	if (arr[i] >= arr[i + 1]) return false
	return (out = checkArray(arr, i + 1))
}
console.log(`Sorted: ${checkArray([3, 4, 5, 8, 9, 17], 0)}`)
console.log(`NotSorted: ${checkArray([3, 4, 5, 18, 9, 17], 0)}`)
