// collect the even numbers from the array

function collectEven(arr) {
	let result = []
	// base case to stop
	if (arr.length == 0) return result
	if (arr[0] % 2 == 1) {
		result.push(arr[0])
	}
	result = result.concat(collectEven(arr.slice(1)))

	return result
}

let res = collectEven([1, 2, 3, 5, 4])

console.log(`🚀  res:`, res)
