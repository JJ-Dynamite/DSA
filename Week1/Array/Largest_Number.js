const largestNumber = arr => {
	let largest = 0
	for (let index = 0; index < arr.length; index++) {
		if (largest < arr[index]) largest = arr[index]
	}
	return largest
}
console.log(`The Largest Number is : ${largestNumber([1, 6, 3, 2, 7, 9])}`)
