const qs = arr => {
    const helper = (arr, si = 0, ei = arr.length - 1) => {
        if (si >= ei) return arr
		let pIdx = partition(arr, si, ei) // Partition the array and get the pivot index
        
		helper(arr, si, pIdx - 1) // Recursively sort the left sub-array
        helper(arr, pIdx + 1, ei) // Recursively sort the right sub-array
    }
    helper(arr)
	return arr
}

const partition = (arr, si, ei) => {
    let pivot = arr[ei] // Choose the last element as the pivot
    let i = si - 1

    for (let j = si; j < ei; j++) {
        if (arr[j] <= pivot) {
            i++
            swap(arr, i, j) // Swap elements to partition the array
        }
    }
    swap(arr, i + 1, ei) // Place the pivot in its final position
    return i + 1 // Return the pivot index
}

const swap = (arr, a, b) => {
    return ([arr[a], arr[b]] = [arr[b], arr[a]])
}


console.log(qs([4, 5, 2, 7, 1, 9, 3, 6]))