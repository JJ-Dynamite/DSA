class HashTable {
	constructor(size = 10) {
		this.BUCKET = size
		this.table = new Array(size)
	}

	hash(key) {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}
		return hash % this.BUCKET
	}

	// Linear probing to resolve collisions
	put(key, value) {
		let index = this.hash(key)
		while (this.table[index] !== undefined) {
			index = (index + 1) % this.BUCKET
		}
		this.table[index] = [key, value]
	}

	get(key) {
		let index = this.hash(key)
		while (this.table[index] !== undefined) {
			if (this.table[index][0] === key) {
				return this.table[index][1]
			}
			index = (index + 1) % this.BUCKET
		}
		return undefined
	}
	
}

// Usage example
const hashTable = new HashTable()
hashTable.put('name', 'John Doe')
hashTable.put('age', 30)

console.log(hashTable.get('name')) // Output: John Doe
console.log(hashTable.get('age')) // Output: 30
