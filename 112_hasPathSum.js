// 112. Path Sum

// Given the root of a binary tree and an integer targetSum, return true if the tree has
// a root-to-leaf path such that adding up all the values along the path equals targetSum.

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
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
    if (!root) return false;
    if (root.val === targetSum && !root.left && !root.right) return true;
    targetSum -= root.val;
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}