import Comparator from '../../../utils/comparator/Comparator';

const comparator = new Comparator();

function mergeHalve(leftArray, rightArray) {
  const mergeArray = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (comparator.greaterThan(leftArray[leftIndex], rightArray[rightIndex])) {
      mergeArray.push(rightArray[rightIndex]);
      rightIndex += 1;
    } else {
      mergeArray.push(leftArray[leftIndex]);
      leftIndex += 1;
    }
  }

  while (leftIndex < leftArray.length) {
    mergeArray.push(leftArray[leftIndex]);
    leftIndex += 1;
  }

  while (rightIndex < rightArray.length) {
    mergeArray.push(rightArray[rightIndex]);
    rightIndex += 1;
  }
  return mergeArray;
}

/**
 * merge sort implementation.
 *
 * @param {*[]} array
 * @return {*[]} sortedArray
 */
export default function mergeSort(inputArray) {
  if (inputArray.length <= 1) {
    return inputArray;
  }

  const rightIndex = inputArray.length - 1;
  const middleIndex = Math.floor(inputArray.length / 2);

  const leftArray = inputArray.slice(0, middleIndex);
  const rightArray = inputArray.slice(middleIndex, rightIndex);

  const leftSortedArray = mergeSort(leftArray);
  const rightSortedArray = mergeSort(rightArray);

  return mergeHalve(leftSortedArray, rightSortedArray);
}
