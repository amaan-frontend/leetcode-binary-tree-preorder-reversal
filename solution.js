/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    // Base case: If the root is null, return an empty array.
    if (root === null) {
        return [];
    }

    var result = []; // To store the preorder traversal result.
    var stack = []; // Stack to perform iterative traversal.

    // Start with the root node and push it to the stack.
    stack.push(root);

    while (stack.length > 0) {
        var current = stack.pop(); // Pop the top node from the stack.

        // Add the current node's value to the result array.
        result.push(current.val);

        // Push the right child to the stack first (LIFO).
        if (current.right !== null) {
            stack.push(current.right);
        }

        // Push the left child to the stack (so that it will be processed next).
        if (current.left !== null) {
            stack.push(current.left);
        }
    }

    return result;
};
