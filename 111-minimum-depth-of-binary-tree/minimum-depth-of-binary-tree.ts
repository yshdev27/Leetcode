/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDepth(root: TreeNode | null): number {

      if (!root) return 0;

  const queue: Array<{ node: TreeNode, depth: number }> = [];
  queue.push({ node: root, depth: 1 });

  while (queue.length > 0) {
    const { node, depth } = queue.shift()!;

    // Check if the node is a leaf
    if (!node.left && !node.right) {
      return depth;
    }

    if (node.left) queue.push({ node: node.left, depth: depth + 1 });
    if (node.right) queue.push({ node: node.right, depth: depth + 1 });
  }

  return 0; // Shouldn't be reached
    
};