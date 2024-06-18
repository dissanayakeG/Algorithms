class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node === null) return;

    // Traverse the left subtree
    inOrderTraversal(node.left);

    // Visit the root node
    console.log(node.value);

    // Traverse the right subtree
    inOrderTraversal(node.right);
}

// Example usage:
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrderTraversal(root); // Output: 4 2 5 1 3


//     1
//    / \
//   2   3
//  / \
// 4   5


// Start at Root (1):
// Traverse left subtree of 1.

// Node (2):
// Traverse left subtree of 2.

// Node (4):
// Traverse left subtree of 4 (null), return.
// Print 4.
// Traverse right subtree of 4 (null), return.
// Return to node 2.

// Node (2):
// Print 2.
// Traverse right subtree of 2.

// Node (5):
// Traverse left subtree of 5 (null), return.
// Print 5.
// Traverse right subtree of 5 (null), return.
// Return to node 1.

// Node (1):
// Print 1.
// Traverse right subtree of 1.

// Node (3):
// Traverse left subtree of 3 (null), return.
// Print 3.
// Traverse right subtree of 3 (null), return.
// The printed output is: 4 2 5 1 3.