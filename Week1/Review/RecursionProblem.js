const rec = n => {
	if (n == 1) return 1
	let fn = rec(n - 1)
	console.log(n)
	return fn
}
rec(5)
