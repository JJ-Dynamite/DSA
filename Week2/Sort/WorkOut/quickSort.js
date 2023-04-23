let qs = arr => {
	let helper = (arr, si = 0, ei = arr.length - 1) => {
		if (si >= ei) return
		let pIdx = partition(arr, si, ei)
		helper(arr, si, pIdx - 1)
		helper(arr, pIdx + 1, ei)
	}
	helper(arr)
	return arr
}

let partition = (arr, si, ei) => {
	let pivot = arr[ei]
	let i = si - 1
	for (let j = si; j < ei; j++) {
		if (arr[j] <= pivot) {
			i++
			swap(arr, i, j)
		}
	}
	swap(arr, i + 1, ei)
	return i + 1
}
let swap = (arr, a, b) => {
	return ([arr[a], arr[b]] = [arr[b], arr[a]])
}
console.log(qs([7, 3, 2, 1, 5]))
