/**
 * @param {string} string
 * @return {boolean}
 */

export default function isPanlindrome(string) {
  let leftPointer = 0;
  let rightPointer = string.length - 1;

  while (leftPointer < rightPointer) {
    if (string[leftPointer] !== string[rightPointer]) {
      return false;
    }
    leftPointer += 1;
    rightPointer -= 1;
  }

  return true;
}
