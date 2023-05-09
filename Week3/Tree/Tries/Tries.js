class Node {
	constructor() {
		this.children = {}
		this.isWordEnd = false
	}
}
class Trie {
	constructor() {
		this.root = new Node()
	}

	insert(word = '') {
		let current = this.root
		for (let i = 0; i < word.length; i++) {
			let charToInsert = word[i]
			if (!current.children[charToInsert]) {
				current.children[charToInsert] = new Node()
			}
			current = current.children[charToInsert]
		}
		current.isWordEnd = true
	}

	contains(word = '') {
		let current = this.root
		console.log()
		for (let i = 0; i < word.length; i++) {
			let currentChar = word[i]
			console.log(word[i])
			if (!current.children[currentChar]) {
				console.log('Not present')
				return false
			}

			current = current.children[currentChar]
		}
		console.log('Present')
		return true
	}

	traverse() {
		let words = []
		function traverseHelper(node, word) {
			if (node.isWordEnd) {
				words.push(word)
			}

			// console.log(Object.entries(node.children))

			for (let [char, childNode] of Object.entries(node.children)) {
				// console.log(char)
				// console.log(childNode)
				traverseHelper(childNode, word + char)
			}
		}
		traverseHelper(this.root, '')
		// console.log(words)
		return words
	}

	startsWithPrefix(prefix) {
		let curr = this.root
		for (let i = 0; i < prefix.length; i++) {
			let charToFind = prefix[i]
			if (!curr.children[charToFind]) {
				console.log('Not found')
				return false
			}
			curr = curr.children[charToFind]
		}
		console.log('Found')
		return true
	}

	delete(word) {
		console.log(word)
		this.#deleteHelper(this.root, word, 0)
	}

	#deleteHelper(curr, word, index) {
		console.log(word)
		if (index === word.length) {
			curr.isEndOfWord = false
			return Object.keys(curr.children).length === 0
		}

		let char = word[index]
		if (!curr.children[char]) {
			return false
		}

		let shouldDeleteCurrentNode = this.#deleteHelper(
			curr.children[char],
			word,
			index + 1
		)
		if (shouldDeleteCurrentNode) {
			delete curr.children[char]
			return Object.keys(curr.children).length === 0
		}
		return false
	}
}

let trie = new Trie()
trie.insert('Bat')
trie.insert('Ball')
trie.insert('Batman')
trie.insert('Able')

console.log(trie.startsWithPrefix('ta'));

trie.delete('Bat')

trie.traverse()

trie.contains('Name');
console.log(trie);
// console.log('Name');
// console.log(trie)
