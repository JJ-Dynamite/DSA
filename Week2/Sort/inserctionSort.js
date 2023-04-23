let swap = (inputArr, first, seconde) => {
	return ([inputArr[first], inputArr[seconde]] = [
		inputArr[seconde],
		inputArr[first],
	])
}

const insertionSort = arr => {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				swap(arr, j, j - 1)
			}
		}
	}
	return arr
}

let res = insertionSort([5, 1, 4, 2, 3])
console.log(`🚀  res:`, res)

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

// function insertionSort(array) {
// 	const length = array.length
// 	for (let i = 0; i < length; i++) {
// 		if (array[i] < array[0]) {
// 			//move number to the first position
// 			array.unshift(array.splice(i, 1)[0])
// 		} else {
// 			// only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
// 			if (array[i] < array[i - 1]) {
// 				//find where number should go
// 				for (var j = 1; j < i; j++) {
// 					if (array[i] >= array[j - 1] && array[i] < array[j]) {
// 						//move number to the right spot
// 						array.splice(j, 0, array.splice(i, 1)[0])
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// insertionSort(numbers)
// console.log(numbers)
