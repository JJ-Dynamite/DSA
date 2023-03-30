// sum of number using recursion
const sum = n => {
	if (n == 0) {
		return 1
	} else return n + sum(n - 1)
}
console.log(`Sum: ${sum(5)}`)