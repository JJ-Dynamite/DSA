class Hash {
	constructor(size) {
		this.BUCKET = size // No. of buckets
		this.table = new Array(size) // Pointer to an array containing buckets
		for (let i = 0; i < size; i++) {
			this.table[i] = new Array()
		}
	}

	insert(data) {
		const index = this.hashFunction(data)
		this.table[index].push(data)
	}

	delete(key) {
		// get the hash index of key
		const index = this.hashFunction(key)

		// find the key in (index)th list
		const i = this.table[index].indexOf(key)

		// if key is found in hash table, remove it
		if (i !== -1) {
			this.table[index].splice(i, 1)
		}
	}

	hashFunction(key) {
		return key % this.BUCKET
	}

	displayHash() {
		for (let i = 0; i < this.BUCKET; i++) {
			let str = `${i}`
			for (let j = 0; j < this.table[i].length; j++) {
                str += ` --> ${this.table[i][j]}`
                
			}
			console.log(str)
		}
	}
}

const a = [15, 11, 27, 8, 12]

// insert the keys into the hash table
const h = new Hash(7)
for (let i = 0; i < a.length; i++) {
	h.insert(a[i])
}

h.delete(12)

h.displayHash()
