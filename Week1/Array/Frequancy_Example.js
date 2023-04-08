let Same = (arr1, arr2) => {
	//check frequency
	if (arr1.length !== arr2.length) return 'frequency should be same'
	if (typeof arr1 && typeof arr2 !== 'object')
		return 'both input should be array'

	// return true if every value in the array has it's corresponding value sqrt in 2nd
	let check = false
	for (let i = 0; i < arr1.length; i++) {
		const element = arr1[i] ** 2
		const sqrtElement = arr2[i]
		if (element === sqrtElement) {
			check = true
		} else {
			check = false
		}
		console.log(check)
	}
	return check
}

// let res = Same([1, 2, 3], [1, 4, 9]) // -> true
// let res = Same('1, 2, 3', '1, 4, 9') // -> both input should be array
// let res=Same([1,2,3],[1,4,9,9]) //-> frequency should be same
// let res = Same([1, 2, 3], [1, 1, 1]) //-> false

console.log(res)



  