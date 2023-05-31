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

//     a
//    / \
//   b   c
//  / \   \
// d   e   f

console.log('DFS values', dfsValues(a))
console.log('DFS values', dfsValuesR(a))

function dfsValues(root) {
    if (root === null) return []; //empty tree
    let stack = [root]
    let result = []
    while (stack.length > 0) {
        const current = stack.pop()
        result.push(current.val)
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }
    return result;
}

function dfsValuesR(root) {
    if (root === null) return [];
    const left = root.left
    const right = root.right
    return [root.val, ...dfsTreeR(left), ...dfsTreeR(right)]
}

