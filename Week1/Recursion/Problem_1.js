//factorial using recursion
const fact = n => {
	if (n == 0 || n == 1) return 1
	return n * fact(n - 1)
}
console.log(`Factorial: ${fact(5)}`)
