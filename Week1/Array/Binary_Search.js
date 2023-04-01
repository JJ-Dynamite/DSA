const Binary_Search = (array, val) => {
	let left = 0,
		right = array.length - 1
	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		if (array[mid] === val) {
			return mid
		} else if (array[mid] < val) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return -1
}

console.log(
	`Element is fount at index :${Binary_Search([1, 2, 3, 4, 5, 6, 7], 6)}`
)
