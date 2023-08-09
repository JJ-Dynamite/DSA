# Best codes for the sorting algorithms :

- Quick Sort:
```javascript
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};
```

- Bubble Sort:
```javascript
function bubbleSort(arr) {
  var i, j;
  var len = arr.length;
  var isSwapped = false;
  for (i = 0; i < len; i++) {
    isSwapped = false;
    for (j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
}
```

- Selection Sort:
```javascript
function selectionSort(inputArr) {
  let n = inputArr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
}
```

- Insertion Sort:
```javascript
function insertionSort(inputArr) {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    let current = inputArr[i];
    let j = i - 1;
    while ((j > -1) && (current < inputArr[j])) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = current;
  }
}
```

- Merge Sort:
```javascript
function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

function mergeSort(unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middle = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(
    mergeSort(left), mergeSort(right)
  );
}

```
- Heap Sort:
```javascript
function heapSort(arr) {
  let n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Heap sort
  for (let i = n - 1; i >= 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // Heapify root element
    heapify(arr, i, 0);
  }
}

function heapify(arr, n, i) {
  // Find largest among root, left child and right child
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // Swap and continue heapifying if root is not largest
  if (largest != i) {
    let swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;
    heapify(arr, n, largest);
  }
}
```

| Sorting Algorithm | Time Complexity - Best (Ω) | Time Complexity - Average (Θ) | Time Complexity - Worst (O) | Space Complexity - Worst (O) |
| --- | --- | --- | --- | --- |
| Quick Sort | n log(n) | n log(n) | n^2 | n |
| Bubble Sort | n | n^2 | n^2 | 1 |
| Selection Sort | n^2 | n^2 | n^2 | 1 |
| Insertion Sort | n | n^2 | n^2 | 1 |
| Merge Sort | n log(n) | n log(n) | n log(n) | n |
| Heap Sort | n log(n) | n log(n) | n log(n) | 1 |



---
