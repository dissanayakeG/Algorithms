const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

console.log('nodes-->', printAllNodes(graph, 'a'));

function printAllNodes(graph, src) {
    console.log(src);
    for (let neighbor of graph[src]) {
        printAllNodes(graph, neighbor)
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log('tree-->', dfsTree(a));
console.log('tree-->', dfsTreeR(a));

function dfsTree(root) {
    let stack = [root]
    let result = [];

    while (stack.length > 0) {
        const current = stack.pop()
        result.push(current.val)
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }
    return result
}

function dfsTreeR(root) {
    if (root === null) return []
    const left = root.left
    const right = root.right
    return [root.val, ...dfsTreeR(left), ...dfsTreeR(right)]
}