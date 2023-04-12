**Reverse a linked list**

```javascript
function reverseLinkedList(head) {
	let prev = null
	let current = head
	let next = null
	while (current != null) {
		next = current.next
		current.next = prev
		prev = current
		current = next
	}
	return prev
}
```

In this code snippet, we first initialize three pointers: `prev`, `current`, and `next`. We then iterate through the linked list using a while loop. In each iteration, we set `next` to the next node in the list, set the `next` pointer of the current node to the previous node, and then move all three pointers one node forward. Finally, we return the new head of the reversed linked list.

**To find the middle element of a linked list**
you can use the "slow and fast pointer" technique. Here's how it works:

1. Initialize two pointers, `slow` and `fast`, to the head of the linked list.
2. Move the `fast` pointer two nodes ahead for every one node that the `slow` pointer moves.
3. When the `fast` pointer reaches the end of the linked list, the `slow` pointer will be pointing to the middle element.

```javascript
function findMiddleElement(head) {
	let slow = head
	let fast = head
	while (fast !== null && fast.next !== null) {
		slow = slow.next
		fast = fast.next.next
	}
	return slow
}
```

In this code snippet, we first initialize both pointers to the head of the linked list. We then iterate through the linked list using a while loop. In each iteration, we move the `slow` pointer one node forward and the `fast` pointer two nodes forward. When the `fast` pointer reaches the end of the linked list, we return the node that the `slow` pointer is pointing to.

**To remove duplicates from a sorted linked list**,
we can iterate through the linked list and compare each node with its next node. If the data in the current node is equal to the data in the next node, you can skip over the next node by setting the `next` pointer of the current node to the node after the next node. Here's what this looks like in code:

```javascript
function removeDuplicates(head) {
	let current = head
	while (current !== null && current.next !== null) {
		if (current.data === current.next.data) {
			current.next = current.next.next
		} else {
			current = current.next
		}
	}
	return head
}
```

In this code snippet, we first initialize a `current` pointer to the head of the linked list. We then iterate through the linked list using a while loop. In each iteration, we compare the data in the current node with the data in its next node. If they are equal, we skip over the next node by setting the `next` pointer of the current node to the node after the next node. If they are not equal, we move the `current` pointer one node forward.

**To merge two sorted linked lists, we can use a recursive approach.**

```javascript
	mergeSortedLists(head1, head2) {
		if (head1 === null) {
			return head2
		}
		if (head2 === null) {
			return head1
		}
		if (head1.data < head2.data) {
			head1.next = this.mergeSortedLists(head1.next, head2)
			return head1
		} else {
			head2.next = this.mergeSortedLists(head1, head2.next)
			return head2
		}
	} }
}
```

In this code snippet, we first check if either of the heads is null. If one of them is null, we simply return the other one. If neither of them is null, we compare the data in the heads of both lists. If the data in the first list is less than the data in the second list, we set the `next` pointer of the first node to the result of merging the rest of the first list with the second list. If the data in the second list is less than or equal to the data in the first list, we set the `next` pointer of the second node to the result of merging the first list with the rest of the second list.

**A standard approach to sort a linked list is to use the merge sort algorithm**
Merge sort is an efficient, general-purpose, comparison-based sorting algorithm that works well with linked lists. The idea is to split the list into two halves, recursively sort the halves, and then merge the two sorted halves.

```javascript
sortList(head = this.head) {
    if (!head || !head.next) {
        return head;
    }
    let mid = this.findMid(head);
    let left = head;
    let right = mid.next;
    mid.next = null;
    left = this.sortList(left);
    right = this.sortList(right);
    return this.mergeSortedLists(left, right);
}
```

This method can be added to the `LinkedList` class. It uses the `findMid` and `mergeSortedLists` methods of the `LinkedList` class to split the list into two halves, recursively sort the halves, and then merge the two sorted halves.

**Merge two sorted linked lists**
Write a function that takes in the heads of two sorted linked lists and returns the head of a merged linked list. The merged linked list should be sorted in ascending order.

```javascript
function mergeTwoLists(l1, l2) {
	let dummy = new ListNode(0)
	let current = dummy

	while (l1 !== null && l2 !== null) {
		if (l1.val < l2.val) {
			current.next = l1
			l1 = l1.next
		} else {
			current.next = l2
			l2 = l2.next
		}
		current = current.next
	}

	if (l1 !== null) {
		current.next = l1
	} else if (l2 !== null) {
		current.next = l2
	}

	return dummy.next
}
```

**Remove Nth Node From End of List**
Given the head of a linked list and an integer n, remove the nth node from the end of the list and return its head.

```javascript
function removeNthFromEnd(head, n) {
	let dummy = new ListNode(0)
	dummy.next = head
	let first = dummy
	let second = dummy

	for (let i = 1; i <= n + 1; i++) {
		first = first.next
	}

	while (first != null) {
		first = first.next
		second = second.next
	}

	second.next = second.next.next
	return dummy.next
}
```
