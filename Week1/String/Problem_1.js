// Write a function to shift each letter in the input string by n positions along the alphabet.

function shiftAlphabets(string, n) {
	let result = ''
	let str = typeof string
	if (str !== 'string') return 'string expected'
	
	for (let char of string) {
		let charCode = char.charCodeAt(0)
		if (charCode >= 65 && charCode <= 90) {
			// a - z
			// Shift uppercase letters by n positions
			result += String.fromCharCode(((charCode - 65 + n) % 26) + 65)
		} else if (charCode >= 97 && charCode <= 122) {
			// A - Z
			// Shift lowercase letters by n positions
			result += String.fromCharCode(((charCode - 97 + n) % 26) + 97)
		} else {
			// Leave non-letter characters unchanged
			result += char
		}
	}
	return result
}

console.log(shiftAlphabets('abc', 1))
console.log(shiftAlphabets({'xyz':1}, 3))
console.log(shiftAlphabets('ABC', 2.5))
console.log(shiftAlphabets('XYZ', 3))
console.log(shiftAlphabets('Hello, World!', 3))
console.log(shiftAlphabets('The quick brown fox jumps over the lazy dog.', 15))
