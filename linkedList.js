class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e

// head = appendAtTheEnd(a, new Node(69));
// print(head);

head = removeNode(a, 2);
print(head);

function removeNode(head, deleteNode) {
    let previousNode = null;

    if (head.val == deleteNode) {
        head = head.next
        return head;
    }

    let currentNode = head;

    while (currentNode) {
        // Check if the next node is the one to be deleted
        if (currentNode.next && currentNode.next.val === deleteNode) {
            currentNode.next = currentNode.next.next;
            return head;
        }
        currentNode = currentNode.next;
    }
    return head;
}

function appendAtTheEnd(head, newNode) {

    if (newNode == null) return;

    let currentNode = head;
    let lastNode = null;

    while (currentNode) {
        if (currentNode.next == null) {
            lastNode = currentNode
        }
        currentNode = currentNode.next
    }

    if (lastNode) {
        lastNode.next = newNode
    }
    return head;
}

function print(head) {

    if (head == null) {
        return null;
    }
    console.log(head.val)
    print(head.next)
}