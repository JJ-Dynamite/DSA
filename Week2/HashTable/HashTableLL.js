class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  class HashTable {
    constructor(size = 50) {
      this.size = size;
      this.table = new Array(size);
    }
  
    #hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    set(key, value) {
      const address = this.#hash(key);
      if (!this.table[address]) {
        this.table[address] = new Node(key, value);
      } else {
        let currentNode = this.table[address];
        while (currentNode.next) {
          if (currentNode.key === key) {
            currentNode.value = value;
            return;
          }
          currentNode = currentNode.next;
        }
        if (currentNode.key === key) {
          currentNode.value = value;
        } else {
          currentNode.next = new Node(key, value);
        }
      }
    }
  
    get(key) {
      const address = this.#hash(key);
      if (!this.table[address]) {
        return undefined;
      } else {
        let currentNode = this.table[address];
        while (currentNode) {
          if (currentNode.key === key) {
            return currentNode.value;
          }
          currentNode = currentNode.next;
        }
        return undefined;
      }
    }
  
    delete(key) {
      const address = this.#hash(key);
      if (!this.table[address]) {
        return undefined;
      } else {
        let currentNode = this.table[address];
        if (currentNode.key === key) {
          this.table[address] = currentNode.next;
          return currentNode.value;
        } else {
          let previousNode = currentNode;
          currentNode = currentNode.next;
          while (currentNode) {
            if (currentNode.key === key) {
              previousNode.next = currentNode.next;
              return currentNode.value;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
          }
          return undefined;
        }
      }
    }
  }
  