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
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  var maxDepth = 1;

  var traverseTree = function(node, depth) {
    if (depth > maxDepth) {
        maxDepth = depth;
    }
    if (node.left !== null) {
      traverseTree(node.left, depth + 1);
    }

    if (node.right !== null) {
      traverseTree(node.right, depth + 1);
    }
  }

  traverseTree(root, 1);
  return maxDepth;
};