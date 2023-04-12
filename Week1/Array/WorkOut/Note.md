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
