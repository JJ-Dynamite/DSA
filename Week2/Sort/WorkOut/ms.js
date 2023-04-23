function ms(arr) {
	if (arr.length <= 1) return arr
	let mid = Math.floor(arr.length / 2)
	let left = arr.slice(0, mid)
	let right = arr.slice(mid)

	return merge(ms(left), ms(right))
}
function merge(left, right) {
	let i = 0
	let j = 0
	let arr = []

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			arr.push(left[i])
			i++
		} else {
			arr.push(right[j])
			j++
		}
	}
	return arr.concat(left.slice(i)).concat(right.slice(j))
}
let res=ms([6,5,8,2,5,1])
console.log(`🚀  res:`, res);
