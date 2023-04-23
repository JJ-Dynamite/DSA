let arr = [5, 2, 4, 7, 8, 1]
let max = arr[0]
let temp = []

for (let i = 1; i < arr.length; i++) {
	if (arr[i] > max) {
		max = arr[i]
		temp.push(max)
	}
}

console.log(temp[temp.length - 2])
