A linked list is a way to store a collection of items. Each item is stored in a Node that has two parts:

-   the data and a reference to the next Node in the list.

Here’s an example of how you can create a Node using a constructor function in JavaScript:

```js
function Node(data) {
	this.data = data
	this.next = null
}
```

-   A linked list has a head that points to the first Node in the list. You can add new items to the list by creating new Nodes and updating the references to link them together.

Here’s an example of how you can create a LinkedList constructor function with an add method that adds new items to the end of the list:

```js
function LinkedList() {
	this.head = null
}
LinkedList.prototype.add = function (data) {
	const newNode = new Node(data)
	if (!this.head) {
		this.head = newNode
	} else {
		let current = this.head
		while (current.next) {
			current = current.next
		}
		current.next = newNode
	}
}
```

-   You can create a new instance of the LinkedList constructor function and use the add method to add new items to the list:

```js
const list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)
```

-   You can print the elements of the `linked list` by adding a printList method to the `LinkedList` prototype. Here’s an example:

```js
LinkedList.prototype.printList = function () {
	let current = this.head
	let output = ''
	while (current != null) {
		output += current.data + ' -> '
		current = current.next
	}
	output += 'null'
	console.log(output)
}

list.printList() // This will print "1 -> 2 -> 3 -> null" to the console
```

-   This will print the elements of the linked list in a more visually appealing format, with arrows pointing from one element to the next and a `null` at the end to indicate the end of the list.

```md
-   Node

    -   data: value of the node
    -   next: reference to the next node in the list

-   LinkedList

    -   head: reference to the first node in the list

-   LinkedList.prototype.add(data)

    -   creates a new Node with the given data
    -   if the list is empty, sets the head to the new node
    -   otherwise, traverses the list to find the last node and sets its next property to the new node

-   LinkedList.prototype.printList()

    -   traverses the list and logs each node's data in order

-   list: instance of LinkedList

    -   adds nodes with data 1, 2, 3, and 4
    -   prints the list: "1 -> 2 -> 3 -> 4 -> null"

        

1. list is created

list
|
v
null

2. add(1) is called

list
|
v
+------+
| data |
| 1 |
+------+
| next |---> null
+------+

3. add(2) is called

list
|
v
+------+ +------+
| data | | data |
| 1 | | 2 |
+------+ +------+
| next |--->| next |---> null
+------+ +------+

4. add(3) is called

list
|
v
+------+ +------+ +------+
| data | | data | | data |
| 1 | | 2 | | 3 |
+------+ +------+ +------+
| next |--->| next |--->| next |---> null
+------+ +------+ +------+

5. add(4) is called

list
|
v
+------+ +------+ +------+ +------+
| data | | data | | data | | data |
| 1 | | 2 | | 3 | | 4 |
+------+ +------+ +------+ +------+
| next |--->| next |--->| next |--->| next |---> null
+------+ +------+ +------+ +------+

6. printList() is called and logs "1 -> 2 -> 3 -> 4 -> null"
```
## sll and dll
```js

// Singly linked list Node class
class SLLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


// Singly linked list class
class MySinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }


  add(data) {
    const newNode = new SLLNode(data);


if (this.head === null) {
  this.head = newNode;
} else {\n      let temp = this.head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = newNode;
}
this.size++;

  }


  remove(data) {
    if (this.head === null) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return;
    }


let temp = this.head;
while (temp.next !== null && temp.next.data !== data) {
  temp = temp.next;
}
if (temp.next !== null) {
  temp.next = temp.next.next;
  this.size--;
}

  }
}


// Doubly linked list Node class
class DLLNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}


// Doubly linked list class
class MyDoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }


  add(data) {
    const newNode = new DLLNode(data);


if (this.head === null) {
  this.head = newNode;
} else {
  let temp = this.head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  newNode.prev = temp;
  temp.next = newNode;
}
this.size++;

  }


  remove(data) {
    if (this.head === null) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      if (this.head !== null) {
        this.head.prev = null;
      }
      this.size--;
      return;
    }


let temp = this.head;
while (temp.next !== null && temp.next.data !== data) {
  temp = temp.next;
}
if (temp.next !== null) {
  temp.next = temp.next.next;
  if (temp.next !== null) {
    temp.next.prev = temp;
  }
  this.size--;
}

  }
}
```