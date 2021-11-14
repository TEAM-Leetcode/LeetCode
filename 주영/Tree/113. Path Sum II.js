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
var pathSum = function (root, targetSum) {
  if (!root) return [];
  let result = [];
  const recurPathSum = (node, target, path) => {
    if (!node.left && !node.right && target === node.val) {
      // console.log('path: ', path);
      result.push(path);
    }

    if (node.left)
      recurPathSum(node.left, target - node.val, [...path, node.left.val]);
    if (node.right)
      recurPathSum(node.right, target - node.val, [...path, node.right.val]);
  };
  recurPathSum(root, targetSum, [root.val]);
  return result;
};
let root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
let targetSum = 22;

pathSum(root, targetSum);
