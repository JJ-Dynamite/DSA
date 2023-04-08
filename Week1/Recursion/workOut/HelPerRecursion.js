// helper function recursion

collectOddValues = arr => {
	let type = typeof arr
	if (type !== 'object') return 'excepted an array '
	if (arr.length == 0) return 'the array is empty '
	let result = []
	let helper = helperInput => {
		//base case
		if (helperInput.length === 0) return

		//check the first value in the arr is odd then push to result arr
		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0])
		}
		// remove first element
		helper(helperInput.slice(1))
	}
	helper(arr)
	return result
}

let res = collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) //-> 1,3,5,7,9
// let res=collectOddValues([1.5,2,3.9,4,5,6,7,8,9.4,10]) //-> 1,5,7,9
// let res=collectOddValues([]) //-> the array is empty
// let res=collectOddValues('') //-> excepted an array
console.log(res)
