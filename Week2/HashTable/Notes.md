## Here are some answers to the common interview questions on hash tables in JavaScript:

---

1. **What is a hash table?**
   A hash table is a data structure that is used to store key-value pairs. The keys are used to index into the table, and the values are the data that is stored at that location. A hash function is used to transform the key into an index for the array.

2. **Can you explain what hashing means in the context of data structures and algorithms?**
   Hashing is the process of transforming a key into an index for an array using a hash function. The goal of hashing is to distribute the keys evenly across the array so that each index has roughly the same number of keys.

3. **How is a hash table different from an array?**
   An array is a data structure that stores elements in a contiguous block of memory and allows access to those elements using an index. A hash table, on the other hand, uses a hash function to transform a key into an index for an array and allows access to the values stored in the table using the key.

4. **Why do we use hashing?**
   We use hashing to distribute keys evenly across an array so that we can quickly look up values using a key. This allows us to achieve constant-time lookup, insertion, and deletion operations.

5. **Can you explain how hash tables work?**
   A hash table uses a hash function to transform a key into an index for an array. When we want to store a value in the table, we use the hash function to find the index for the key and store the value at that location in the array. If there is already an element at that index (a collision), we use a collision resolution technique such as linear probing or separate chaining to find another location in the array to store the value. When we want to look up a value in the table, we use the same process to find it in the array.

6. **What are some examples of hash functions that can be used with hash tables?**
   Some common examples of hash functions used with hash tables include division hashing, multiplication hashing, and mid-square hashing.

## Example that demonstrates collision resolution using **separate chaining** and **open addressing**:

---

Let's say we have a hash table with an array of size 5 and a simple hash function that takes the sum of the character codes of the key and takes the modulus with the size of the array. We want to store the following key-value pairs in the table:

```
key: "cat", value: 1
key: "dog", value: 2
key: "bird", value: 3
key: "fish", value: 4
```

Using our hash function, both "cat" and "bird" hash to index 2 in the array. This is a collision.

With _separate chaining_, we would create a linked list at index 2 of the array and store both values in the linked list. The array would look like this:

```
[ , , [("cat", 1), ("bird", 3)], , ]
```

With _open addressing_ using linear probing, we would store the value for "cat" at index 2 and then move to the next index (index 3) to store the value for "bird". The array would look like this:

```
[ , , ("cat", 1), ("bird", 3), ]
```

**Separate chaining** is a method where each element of the hash table's array contains a linked list. When a collision occurs, the new key-value pair is added to the linked list at the index where the collision occurred. When looking up a value, the linked list at the index returned by the hash function is searched to find the value associated with the key.

**Open addressing** is a method where all key-value pairs are stored directly in the hash table's array. When a collision occurs, a new index is calculated using a probing sequence until an empty slot is found. There are several types of open addressing, including linear probing, quadratic probing, and double hashing.

-   **Linear probing** involves moving to the next index in the array until an empty slot is found. If the end of the array is reached, it wraps around to the beginning of the array.
-   **Quadratic probing** involves moving to the next index by a certain amount that increases quadratically. For example, if the first calculated index is `i`, then the next indices in the sequence would be `i + 1^2`, `i + 2^2`, `i + 3^2`, and so on.
-   **Double hashing** involves using a second hash function to calculate a new index when a collision occurs. The second hash function returns a value that is used as an offset from the original index.

---

**Separate chaining:**

```javascript
class HashTable {
	constructor(size) {
		this.table = new Array(size)
		this.size = size
	}

	hash(key) {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}
		return hash % this.size
	}

	put(key, value) {
		let index = this.hash(key)
		if (this.table[index] === undefined) {
			this.table[index] = []
		}
		this.table[index].push([key, value])
	}

	get(key) {
		let index = this.hash(key)
		if (this.table[index] === undefined) {
			return undefined
		}
		for (let i = 0; i < this.table[index].length; i++) {
			if (this.table[index][i][0] === key) {
				return this.table[index][i][1]
			}
		}
		return undefined
	}
}
```

This code creates a `HashTable` class with a constructor that takes in a `size` parameter and creates an array of that size to store the data. The `hash` function takes in a `key` and returns an index for the array by adding up the character codes of the key and taking the modulus with the size of the array. The `put` function takes in a `key` and a `value` and stores them in the array at the index returned by the `hash` function. If there is already an element at that index (a collision), it will add the new key-value pair to the linked list at that index. The `get` function takes in a `key` and returns the value associated with that key by finding it in the linked list at the index returned by the `hash` function.

**Linear probing:**

```javascript
class HashTable {
	constructor(size) {
		this.table = new Array(size)
		this.size = size
	}

	hash(key) {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}
		return hash % this.size
	}

	put(key, value) {
		let index = this.hash(key)
		while (this.table[index] !== undefined) {
			index = (index + 1) % this.size
		}
		this.table[index] = [key, value]
	}

	get(key) {
		let index = this.hash(key)
		while (
			this.table[index] !== undefined &&
			this.table[index][0] !== key
		) {
			index = (index + 1) % this.size
		}
		if (this.table[index] === undefined) {
			return undefined
		} else {
			return this.table[index][1]
		}
	}
}
```

-   This code creates a `HashTable` class with a constructor that takes in a `size` parameter and creates an array of that size to store the data. The `hash` function takes in a `key` and returns an index for the array by adding up the character codes of the key and taking the modulus with the size of the array. The `put` function takes in a `key` and a `value` and stores them in the array at the index returned by the `hash` function. If there is already an element at that index (a collision), it will move to the next index until it finds an empty spot. The `get` function takes in a `key` and returns the value associated with that key by finding it in the array using the same process as the `put` function.

**Quadratic probing:**

```javascript
class HashTable {
	constructor(size) {
		this.table = new Array(size)
		this.size = size
	}

	hash(key) {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}
		return hash % this.size
	}

	put(key, value) {
		let index = this.hash(key)
		let i = 1
		while (this.table[index] !== undefined) {
			index = (index + i * i) % this.size
			i++
		}
		this.table[index] = [key, value]
	}

	get(key) {
		let index = this.hash(key)
		let i = 1
		while (
			this.table[index] !== undefined &&
			this.table[index][0] !== key
		) {
			index = (index + i * i) % this.size
			i++
		}
		if (this.table[index] === undefined) {
			return undefined
		} else {
			return this.table[index][1]
		}
	}
}
```

This code creates a `HashTable` class with a constructor that takes in a `size` parameter and creates an array of that size to store the data. The `hash` function takes in a `key` and returns an index for the array by adding up the character codes of the key and taking the modulus with the size of the array. The `put` function takes in a `key` and a `value` and stores them in the array at the index returned by the `hash` function. If there is already an element at that index (a collision), it will move to the next index using quadratic probing until it finds an empty spot. The `get` function takes in a `key` and returns the value associated with that key by finding it in the array using the same process as the `put` function.

**Double hashing:**

```javascript
class HashTable {
	constructor(size) {
		this.table = new Array(size)
		this.size = size
	}

	hash(key) {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}
		return hash % this.size
	}

	secondHash(key) {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}
		return this.size - 2 - (hash % (this.size - 2))
	}

	put(key, value) {
		let index = this.hash(key)
		let offset = this.secondHash(key)
		while (this.table[index] !== undefined) {
			index = (index + offset) % this.size
		}
		this.table[index] = [key, value]
	}

	get(key) {
		let index = this.hash(key)
		let offset = this.secondHash(key)
		while (
			this.table[index] !== undefined &&
			this.table[index][0] !== key
		) {
			index = (index + offset) % this.size
		}
		if (this.table[index] === undefined) {
			return undefined
		} else {
			return this.table[index][1]
		}
	}
}
```

This code creates a `HashTable` class with a constructor that takes in a `size` parameter and creates an array of that size to store the data. The `hash` function takes in a `key` and returns an index for the array by adding up the character codes of the key and taking the modulus with the size of the array. The `secondHash` function takes in a `key` and returns an offset value using a second hash function. The `put` function takes in a `key` and a `value` and stores them in the array at the index returned by the `hash` function. If there is already an element at that index (a collision), it will move to another index using double hashing until it finds an empty spot. The `get` function takes in a `key` and returns the value associated with that key by finding it in the array using the same process as the `put` function.
