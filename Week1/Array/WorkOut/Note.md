**Valid Anagram:** Given two strings s and t, write a function to determine if t is an anagram of s.

```javascript
var isAnagram = function (s, t) {
	if (s.length !== t.length) {
		return false
	}
	let charCount = {}
	for (let i = 0; i < s.length; i++) {
		charCount[s[i]] = (charCount[s[i]] || 0) + 1
		charCount[t[i]] = (charCount[t[i]] || 0) - 1
	}
	for (let key in charCount) {
		if (charCount[key] !== 0) {
			return false
		}
	}
	return true
}
```

-   The technique used in this problem is **hashing**. We create a hash table to store the count of characters in the first string `s`. Then, we iterate through the second string `t` and decrement the count of characters in the hash table. If at any point, the count of a character becomes negative or if the count of a character is not zero at the end, we return `false` as `t` is not an anagram of `s`. Otherwise, we return `true`.

    -   **Time complexity:** The time complexity of this solution is `O(n)` where `n` is the length of the strings `s` and `t`. We iterate through both strings once to create and update the hash table and then iterate through the hash table once to check if all counts are zero.
    -   **Space complexity:** The space complexity of this solution is `O(1)` because the size of the hash table is constant as there are only a fixed number of characters.

**Top K Frequent Elements:** Given a non-empty array of integers, return the k most frequent elements.

```javascript
var topKFrequent = function (nums, k) {
	let numCount = {}
	for (let i = 0; i < nums.length; i++) {
		numCount[nums[i]] = (numCount[nums[i]] || 0) + 1
	}
	let numArr = Object.keys(numCount).map(key => [key, numCount[key]])
	numArr.sort((a, b) => b[1] - a[1])
	let result = []
	for (let i = 0; i < k; i++) {
		result.push(parseInt(numArr[i][0]))
	}
	return result
}
```

-   The technique used in this problem is also **hashing**. We create a hash table to store the count of each element in the array. Then, we convert the hash table into an array of key-value pairs and sort it in descending order based on the value (count). Finally, we iterate through the first `k` elements of the sorted array and add the keys to the result array.
    -   **Time complexity:** The time complexity of this solution is `O(n log n)` where `n` is the length of the input array. We iterate through the input array once to create the hash table which takes `O(n)` time. Then, we convert the hash table into an array and sort it which takes `O(n log n)` time. Finally, we iterate through the first `k` elements of the sorted array which takes `O(k)` time.
    -   **Space complexity:** The space complexity of this solution is `O(n)` because we create a hash table and an array to store the count of each element in the input array.

How do you perform a binary search using recursion in JavaScript?
**Binary search using recursion**

```javascript
function binarySearch(arr, x) {
	return recursiveFunction(arr, x, 0, arr.length - 1)
}

let recursiveFunction = function (arr, x, start, end) {
	if (start > end) return false
	let mid = Math.floor((start + end) / 2)
	if (arr[mid] === x) return true
	if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1)
	else return recursiveFunction(arr, x, mid + 1, end)
}
```

#spaced

In this example, we have a `binarySearch` function that takes in 2 arguments: `arr` (the sorted array to search) and `x` (the value to search for). This function calls the `recursiveFunction` with the appropriate arguments. The `binarySearch` function returns `true` if the value is found and `false` otherwise.

Here's an example of how you can use the `binarySearch` function:

```javascript
let arr = [1, 3, 5, 7, 8, 9]
let x = 5

if (binarySearch(arr, x)) console.log('Element found!')
else console.log('Element not found!')

x = 6
if (binarySearch(arr, x)) console.log('Element found!')
else console.log('Element not found!')
```
