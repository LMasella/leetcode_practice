// 113. Path Sum II

// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where
// the sum of the node values in the path equals targetSum. Each path should be returned as
// a list of the node values, not node references.

// A root-to-leaf path is a path starting from the root and ending at any leaf node.
// A leaf is a node with no children.

// Constraints:
// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

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
 * @param {number} targetSum
 * @return {number[][]}
 */
function pathSum(root, targetSum) {
    const paths = [];
    const createPath = (node, sum, path) => {
        if (!node) return;
        sum += node.val;
        path.push(node.val);
        if (!node.left && !node.right && sum === targetSum) {
            paths.push([...path]);
            return;
        }
        createPath(node.left, sum, [...path]);
        createPath(node.right, sum, [...path]);
        return;
    }
    createPath(root, 0, []);
    return paths;
}