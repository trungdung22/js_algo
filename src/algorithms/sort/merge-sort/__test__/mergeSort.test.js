import mergeSort from '../mergeSort';

describe('mergeSort', () => {
  it('should sort array', () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([1, 2])).toEqual([1, 2]);
    expect(mergeSort([2, 1])).toEqual([1, 2]);
    expect(mergeSort([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
  });
});
