function mergeSort(arr) {
	// base case
	if (arr.length <= 1) return arr

	// split array into two halves
	const mid = Math.floor(arr.length / 2)
	const left = arr.slice(0, mid)
	const right = arr.slice(mid)

	// merge the sorted halves
	return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
	const merged = []
	let i = 0
	let j = 0

	// merge the two arrays by comparing elements
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			merged.push(left[i])
			i++
		} else {
			merged.push(right[j])
			j++
		}
	}

	// add any remaining elements from the left or right array
	return merged.concat(left.slice(i)).concat(right.slice(j))
}
const arr = [5, 2, 7, 1, 8, 4]
const sortedArr = mergeSort(arr)
console.log(sortedArr)
