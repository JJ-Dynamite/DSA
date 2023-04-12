const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

class LinkedList {
	constructor() {
		this.head = null
	}

	add(value) {
		const newNode = { value }
		newNode.next = this.head
		this.head = newNode
	}
}

const myList = new LinkedList()

rl.question('Enter a value to add to the list: ', value => {
	myList.add(value)
	console.log(`Value added: ${value}`)
	rl.close()
})
