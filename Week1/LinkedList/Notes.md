## Linked List

A linked list is a way to store a collection of items. Each item is stored in a Node that has two parts:

-   the data and a reference to the next Node in the list.

## Create a Node using a constructor function :

```js
function Node(data) {
	this.data = data
	this.next = null
}
```

-   A linked list has a head that points to the first Node in the list. You can add new items to the list by creating new Nodes and updating the references to link them together.

## Create a LinkedList with an add method that adds new items to the end of the list:

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

### `reverseList` :

1. The function starts by initializing three variables: `prev`, `current`, and `next`. The `prev` variable is initialized to `null`, while the `current` variable is initialized to point to the first node in the list (i.e., the `head` of the list). The `next` variable is not initialized yet.

```javascript
let prev = null
let current = this.head
let next
```

```
prev    current    next
  |        |        |
  v        v        v
 null      1   ->   2   ->   3   ->   null
```

2. The function then enters a `while` loop that iterates over the nodes in the list. The loop continues until the `current` variable becomes `null`, which means that all nodes have been processed.

```javascript
while (current) {
	next = current.next
	current.next = prev
	prev = current
	current = next
}
```

3. Inside the loop, the first step is to save a reference to the next node in the list:

```javascript
next = current.next
```

```
prev    current    next
  |        |        |
  v        v        v
 null      1   ->   2   ->   3   ->   null
```

4. The next step is to reverse the link between the current node and the previous node:

```javascript
current.next = prev
```

```
prev    current    next
  |        |        |
  v        v        v
 null <-   1        2   ->   3   ->   null
```

5. After reversing the link, we move both `prev` and `current` forward by one node:

```javascript
prev = current
current = next
```

```
prev    current    next
  |        |        |
  v        v        v
          1 <-      2   ->   3   ->   null
```

6. The loop then repeats these steps for each node in the list until all nodes have been processed.

7. After all nodes have been processed, the `head` of the list is updated to point to the new first node (which was previously the last node):

```javascript
this.head = prev
```

The final result is a reversed linked list:

```
head
  |
  v
  3   ->   2   ->   1   ->   null
```
