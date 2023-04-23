function qs(arr, si, ei) {
	if (si >= ei) return
	const pIdx = partition(arr, si, ei)
	qs(arr, si, pIdx - 1)
	qs(arr, pIdx + 1, ei)
	return arr
}
function partition(arr, si, ei) {
	i = si - 1
	pivot = arr[ei]
	for (let j = si; j < ei; j++) {
		if (arr[j] < pivot) {
			i++
			swap(arr, i, j)
		}
	}
	swap(arr, i + 1, ei)
	return i + 1
}
function swap(arr, a, b) {
	return ([arr[a], arr[b]] = [arr[b], arr[a]])
}

let arr = [5, 7, 9, 1, 4, 2, 3, 4]
console.log(qs(arr, 0, arr.length - 1))
