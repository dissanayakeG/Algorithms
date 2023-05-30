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

const p = new Node(5)
const q = new Node(10)
const r = new Node(15)
const s = new Node(20)

p.next = q;
q.next = r;
r.next = s;

//A->B->C->D->NULL
//curr
//-->curr
//-->-->curr
//-->-->-->curr
//-->-->-->-->curr

console.log('printLinkedList->', printLinkedList(a))
console.log('printLinkedListR->', printLinkedListR(a))
console.log('listValues->', listValues(a))
console.log('listValuesR->', listValuesR(a))
console.log('listSum->', listSum(p))
console.log('listSumR->', listSumR(p))
console.log('listFind->', listFind(a, 'A'))
console.log('listFindR->', listFindR(a, 'A'))


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

function listValues(head) {
    let current = head;
    let values = [];
    while (current !== null) {
        values.push(current.val)
        current = current.next
    }
    return values
}

function listValuesR(head) {
    let values = [];
    fillValues(head, values)
    return values;
}

function fillValues(head, values) {
    if (head === null) return;
    values.push(head.val)
    return fillValues(head.next, values)
}

function listSum(head) {
    let current = head;
    let sum = null;

    while (current !== null) {
        sum = current.val + sum
        current = current.next
    }
    return sum
}

function listSumR(head) {
    let sum = null;
    if (head == null) return sum;
    return head.val + listSumR(head.next)
}

function listFind(head, src) {
    let current = head;
    while (current !== null) {
        if (current.val === src) return true
        current = current.next
    }
    return false
}

function listFindR(head, src) {
    if (head === null) return false
    if (head.val === src) return true
    //return listFindR(head.next, src) //OR
    if (listFindR(head.next, src) == true) {
        return true
    }
    return false
}