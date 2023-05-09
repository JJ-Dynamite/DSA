class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }

    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }

    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;

    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i];
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }

    return true;
  }
}
let trie = new Trie();
trie.insert("hello");
trie.insert("world");
console.log(trie.search("hello")); // true
console.log(trie.search("world")); // true
console.log(trie.search("foo")); // false
console.log(trie.startsWith("he")); // true
console.log(trie.startsWith("w")); // true
console.log(trie.startsWith("f")); // false
