import Comparator from '../../../utils/comparator/Comparator';

/**
 * Bubble sort implementation.
 *
 * @param {*[]} inputArray
 * @return {*[]}
 */

export default function bubbleSort(inputArray) {
  if (inputArray.length <= 1) {
    return inputArray;
  }
  const comparator = new Comparator();
  const array = [...inputArray];

  for (let i = 0; i < inputArray.length; i += 1) {
    for (let j = 0; j < inputArray.length; j += 1) {
      if (comparator.greaterThan(inputArray[i], inputArray[j])) {
        const temp = array[j];
        array[j] = array[i];
        array[j] = temp;
      }
    }
  }
  return array;
}
