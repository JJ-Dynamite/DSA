const print = (n=5, s = 1) => {
	if (s == n + 1) return
	console.log(s)
	print(n, s + 1)
}
print()
