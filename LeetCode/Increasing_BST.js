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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  //base case = left and right both undefined: return current tree

  var traverseTree = function(currentNode, parentNode) {
    //if currentNode === parentNode.right && currentNode.left !== null
    if (currentNode === parentNode.right && currentNode.left !== null) {
      parentNode.right = currentNode.left;
      parentNode.right.right = currentNode;
      currentNode.left = null;
    }

    //if currentNode.left !== null
  }

  traverseTree(root, null)
  //if there's a left node, make the current node the right node of the left node

  /
};