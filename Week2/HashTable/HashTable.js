class HashTable {
	constructor(size) {
		this.data = new Array(size)
		// this.data = [];
	}

	#hash(key) {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}
		return hash % this.data.length
	}

	set(key, value) {
		let address = this.#hash(key)
		if (!this.data[address]) {
			this.data[address] = []
		}
		this.data[address].push([key, value])
		return this.data
	}

	get(key) {
		let address = this.#hash(key)
		let currentBucket = this.data[address]
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] == key) return currentBucket[i][1]
			}
		}
		return undefined
	}
	keys() {
		let keys = []
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keys.push(this.data[i][0][0])
			}
		}
		return keys
	}
}

const myHashTable = new HashTable(20)
myHashTable.set('apples', 9)
myHashTable.set('grapes', 10000)
myHashTable.set('oranges', 19)
console.log(myHashTable.data)
console.log(myHashTable.keys())
console.log(myHashTable.get('apples'))
console.log(myHashTable.get('grapes'))
