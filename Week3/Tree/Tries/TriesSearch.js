class TrieNode {
	constructor() {
		this.children = new Map()
		this.isEndOfWord = false
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode()
	}

	insert(word) {
		let current = this.root

		for (let i = 0; i < word.length; i++) {
			const char = word[i]
			if (!current.children.has(char)) {
				current.children.set(char, new TrieNode())
			}
			current = current.children.get(char)
		}

		current.isEndOfWord = true
	}

	delete(word) {
		if (!this.search(word)) return false

		let current = this.root
		for (let i = 0; i < word.length; i++) {
			const char = word[i]
			const childNode = current.children.get(char)
			if (childNode.children.size === 1 && !childNode.isEndOfWord) {
				current.children.delete(char)
				return true
			}
			current = childNode
		}
		current.isEndOfWord = false
		return true
	}

	search(word) {
		let currentNode = this.root

		for (let i = 0; i < word.length; i++) {
			const char = word[i]
			if (!currentNode.children.has(char)) {
				return false
			}
			currentNode = currentNode.children.get(char)
		}

		return currentNode.isEndOfWord
	}

	traverse(node, prefix, results) {
		if (node.isEndOfWord) results.push(prefix)

		for (const [char, childNode] of node.children) {
			this.traverse(childNode, prefix + char, results)
		}
	}

	autocomplete(prefix) {
		let currentNode = this.root
		const results = []
		for (let i = 0; i < prefix.length; i++) {
			const char = prefix[i]
			if (!currentNode.children.has(char)) return results
			currentNode = currentNode.children.get(char)
		}
		this.traverse(currentNode, prefix, results)
		return results
	}
}

// Example usage:
const trie = new Trie()
trie.insert('hello')
trie.insert('hey')
trie.insert('hi')
trie.insert('joel')
console.log(trie.search('hello')) //search || Contains -> true
console.log(trie.autocomplete('h')) // [ 'hello', 'hey', 'hi' ]
trie.delete('hello')

const results = []
trie.traverse(trie.root, '', results)
console.log(results) // [ 'hello', 'hey', 'hi' ]
