const count = array => {
	let count = 0
	let res = []
	for (let i = 0; i < array.length; i++) {
		if (array[i] == 1) ++count
		res.push(count)
		if (array[i] == 0) {
			count = 0
		}
	}
	return Math.max(...res)
}

console.log(count([1, 1, 0, 1, 1, 1]))
console.log(count([1, 0, 1, 1, 0, 1]))
