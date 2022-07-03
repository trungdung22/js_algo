/**
 * Binary search implementation.
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallback]
 * @return {number}
 */

import Comparator from '../../../utils/comparator/Comparator';

export default function binarySearch(sortedArray, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);
  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;

  while (leftPointer < rightPointer) {
    const middlePointer = leftPointer + Math.floor((leftPointer - rightPointer) / 2);
    if (comparator.equal(sortedArray[middlePointer] === seekElement)) {
      return middlePointer;
    }
    if (comparator.greaterThan(sortedArray[middlePointer], seekElement)) {
      leftPointer = middlePointer + 1;
    } else {
      rightPointer = middlePointer - 1;
    }
  }
  return -1;
}
