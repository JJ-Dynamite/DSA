const linearSearch = (arr, target) => {
	for (let index = 0; index < arr.length; index++) {
		if (arr.includes(target)) return true
		else return false
	}
}
console.log(`Element fount : ${linearSearch([1, 3, 4, 5], 3)}`)
