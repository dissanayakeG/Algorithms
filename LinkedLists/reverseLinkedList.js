class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

let a = new Node(2);
let b = new Node(4);
let c = new Node(6);
let d = new Node(8);

a.next = b;
b.next = c;
c.next = d;
d.next = null;

// console.log('printList->', printList(a))
// console.log('reverseList->', printList(reverseList(a)))
console.log('insertIntoList->', printList(insertIntoList(a, 1)))

function insertIntoList(root, value) {

    let newNode = new Node(value);

    if (!root || value <= root.value) {
        newNode.next = root;
        return newNode;
    }

    const existingNext = root.next;

    if (newNode.value > root.value && newNode.value < existingNext.value) {
        root.next = newNode;
        newNode.next = existingNext;
    }

    insertIntoList(existingNext, value);

    return root;

}

function printList(root) {

    if (root == null) {
        return;
    }
    console.log(root.value);

    printList(root.next);

}

//a->b->c->d
//d->c->b->a

function reverseList(root, previous = null) {

    if (root == null) {
        return previous;
    }

    const currentNext = root.next;
    root.next = previous;

    return reverseList(currentNext, root);

}