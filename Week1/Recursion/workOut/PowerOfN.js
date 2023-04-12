// function pow(x, n) {
// 	if (n == 1) return x
// 	return x * pow(x, n - 1)
// }
// let res = pow(2, 5)

function pow(x, n) {
	if (n == 0) return 1

let fn = pow(x, Math.floor(n / 2)) * pow(x, Math.floor(n / 2))

	if (n % 2 != 0) fn = x * fn

	return fn
}
let res = pow(2, 10)
console.log(`🚀  res:`, res);
