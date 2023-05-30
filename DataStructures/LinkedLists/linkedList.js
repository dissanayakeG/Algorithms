class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b;
b.next = c;
c.next = d;

//A->B->C->D->NULL
//curr
//-->curr
//-->-->curr
//-->-->-->curr
//-->-->-->-->curr

console.log('printLinkedList->', printLinkedList(a))
console.log('printLinkedListR->', printLinkedListR(a))


function printLinkedList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val)
        current = current.next
    }
}

function printLinkedListR(head) {
    if (head == null) return
    console.log(head.val)
    return printLinkedListR(head.next)
}