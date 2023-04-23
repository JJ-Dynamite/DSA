-   **Bubble sort:** This algorithm compares each pair of adjacent elements in an array and swaps them if they are not in the desired order. It repeats this process until the array is sorted. The name comes from the fact that the larger elements "bubble up" to the end of the array. The average and worst-case time complexity of bubble sort is `O(n^2)`, where n is the number of elements in the array.

-   **Selection sort:** This algorithm selects the smallest element in an array and swaps it with the first element. Then it selects the second smallest element and swaps it with the second element. It continues this process until the array is sorted. The name comes from the fact that it selects the minimum element in each iteration. The average and worst-case time complexity of selection sort is `O(n^2)`, where n is the number of elements in the array.

-   **Insertion sort**: This algorithm iterates over an array and inserts each element into its correct position in a sorted sub array that grows from the beginning of the array. It compares each element with the elements in the sorted sub array and shifts them to the right until it finds the correct position to insert. The name comes from the fact that it inserts each element into its proper place. The average and worst-case time complexity of insertion sort is `O(n^2)`, where n is the number of elements in the array.

---

-   **Merge sort:** This algorithm divides an array into two halves, recursively sorts each half, and then merges them back together in a sorted order. The name comes from the fact that it merges two sorted sub arrays into one larger sorted array. The average and worst-case time complexity of merge sort is `O(n log n)`, where n is the number of elements in the array.

```js
function mergeSort(arr) {
	// base case
	if (arr.length <= 1) return arr

	// split array into two halves
	const mid = Math.floor(arr.length / 2)
	const left = arr.slice(0, mid)
	const right = arr.slice(mid)

	// merge the sorted halves
	return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
	const merged = []
	let i = 0
	let j = 0

	// merge the two arrays by comparing elements
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			merged.push(left[i])
			i++
		} else {
			merged.push(right[j])
			j++
		}
	}

	// add any remaining elements from the left or right array
	return merged.concat(left.slice(i)).concat(right.slice(j))
}
const arr = [5, 2, 7, 1, 8, 4]
const sortedArr = mergeSort(arr)
console.log(sortedArr)
```

-   **Quick sort:** This algorithm chooses a pivot element in an array, partitions the array around the pivot such that all elements smaller than the pivot are on its left and all elements larger than the pivot are on its right, and then recursively sorts each partition. The name comes from the fact that it can sort an array quickly if a good pivot is chosen. The average time complexity of quick sort is `O(n log n)`, where n is the number of elements in the array. However, the worst-case time complexity can be `O(n^2)` if a bad pivot is chosen. You can see an example of quick sort in JavaScript from .

```javascript
const qs = arr => {
    const helper = (arr, si = 0, ei = arr.length - 1) => {
        if (si >= ei) return
        let pIdx = partition(arr, si, ei) // Partition the array and get the pivot index
        helper(arr, si, pIdx - 1) // Recursively sort the left sub-array
        helper(arr, pIdx + 1, ei) // Recursively sort the right sub-array
    }
    helper(arr)
}

const partition = (arr, si, ei) => {
    let pivot = arr[ei] // Choose the last element as the pivot
    let i = si - 1

    for (let j = si; j < ei; j++) {
        if (arr[j] <= pivot) {
            i++
            swap(arr, i, j) // Swap elements to partition the array
        }
    }
	console.log(i+1);
    swap(arr, i + 1, ei) // Place the pivot in its final position
    return i + 1 // Return the pivot index
}

const swap = (arr, a, b) => {
    return ([arr[a], arr[b]] = [arr[b], arr[a]])
}

arr = [4, 5, 2, 7, 1, 9, 3, 6]
const res = qs(arr)
// arr ->  [ 1, 2, 3, 4, 5, 6, 7, 9 ]

```

After running this code you should see that the array `arr` is sorted in ascending order.

---

### Diagrams for how the array changes in each step of the `qs` function:

Step 1: Initial call to `helper(arr)` with `si = 0` and `ei = 7`

```
+----------------------------------+
|  arr = [4, 5, 2, 7, 1, 9, 3, 6]  |
+----------------------------------+
```

Step 2: Recursive call to `helper(arr, si, pIdx - 1)` with `si = 0` and `ei = 2`

```
+----------------------------------+
|  arr = [2, 5, 4, 7, 1, 9, 3, 6]  |
+----------------------------------+
```

Step 3: Recursive call to `helper(arr, pIdx + 1, ei)` with `si = 4` and `ei = 7`

```
+----------------------------------+
|  arr = [2, 5, 4, 3, 1, 6, 7, 9]  |
+----------------------------------+
```

Step 4: `helper(arr, si, pIdx - 1)` returns because `si >= ei`

```
+----------------------------------+
|  arr = [2, 3, 4, 5, 1, 6, 7, 9]  |
+----------------------------------+
```

Step 5: `helper(arr, pIdx + 1, ei)` returns because `si >= ei`

```
+----------------------------------+
|  arr = [2, 3, 4, 5, 1, 6, 7, 9]  |
+----------------------------------+
```

Step 6: `helper(arr)` returns because `si >= ei`

```
+----------------------------------+
|  arr = [1, 2, 3, 4, 5, 6, 7, 9]  |
+----------------------------------+
```

Step 7: Final sorted array

```
+----------------------------------+
|  arr = [1, 2, 3, 4, 5, 6, 7, 9]  |
+----------------------------------+
```
