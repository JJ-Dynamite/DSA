class HashTable {
	constructor() {
		this.collection = {};
	}

	hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash;
	}

	add(key, value) {
		const hash = this.hash(key);
		if (!this.data[hash]) {
			this.data[hash] = {};
		}
		this.data[hash][key] = value;
	}

	lookup(key) {
		const hash = this.hash(key);
		if (this.data[hash] && this.data[hash][key]) {
			return this.data[hash][key];
		}
		return null;
	}

	remove(key) {
		const hash = this.hash(key);
		if (this.data[hash] && this.data[hash][key]) {
			delete this.data[hash][key];
			if (Object.keys(this.data[hash]).length === 0) {
				delete this.data[hash];
			}
		}
	}
}
