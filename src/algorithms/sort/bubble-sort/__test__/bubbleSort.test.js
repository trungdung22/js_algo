import bubbleSort from '../bubbleSort';

describe('bubbleSort', () => {
  it('should sort array', () => {
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort([1])).toEqual([1]);
    expect(bubbleSort([1, 2])).toEqual([1, 2]);
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
    expect(bubbleSort([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
  });
});
