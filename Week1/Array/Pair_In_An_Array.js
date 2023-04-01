const PairsInAnArray = arr => {
	for (let i = 0; i < arr.length; i++) {
		const curr = arr[i]
		for (let j = i + 1; j < arr.length; j++) {
			console.log(`(${curr},${arr[j]})`)
		}
	}
}
console.log(`Pairs in the given array:`)
PairsInAnArray([2, 4, 6, 8, 10])
