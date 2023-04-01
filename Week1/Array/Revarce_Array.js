const reverseArray = arr => {
	let left = 0,
		right = arr.length - 1

	while (left < right) {
		//swap
		let temp = arr[left]
		arr[left] = arr[right]
		arr[right] = temp
		left++
		right--
	}
	return arr
}
console.log(`Reversed Array is : ${reverseArray([1, 2, 3, 4, 5])}`)
