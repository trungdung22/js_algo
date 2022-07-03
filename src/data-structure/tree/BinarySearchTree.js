import Comparator from '../../utils/comparator/Comparator';
import TreeNode from './TreeNode';
import Stack from '../stack/Stack';

export default class BinarySearchTree {
  /**
   * @param {function} [nodeValueCompareFunction]
   */
  constructor(nodeValueCompareFunction) {
    this.root = new TreeNode(null);

    // Steal node comparator from the root.
    this.nodeComparator = new Comparator(nodeValueCompareFunction);
  }

  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  insert(value) {
    let currentNode = this.root;

    if (this.nodeComparator.equal(currentNode.value, null)) {
      currentNode.value = value;
      return;
    }
    const insertNode = new TreeNode(value);

    while (currentNode) {
      if (this.nodeComparator.greaterThan(value, currentNode.value)) {
        if (!currentNode.right) {
          currentNode.right = insertNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = insertNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }

  /**
   * @return {*[]}
   */
  traverseInOrder() {
    const traverse = [];

    const stack = new Stack();
    let currentNode = this.root;
    while (!stack.isEmpty() || currentNode) {
      if (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      } else {
        currentNode = stack.pop();
        traverse.push(currentNode.value);
        currentNode = currentNode.right;
      }
    }
    return traverse;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.traverseInOrder().toString();
  }
}
