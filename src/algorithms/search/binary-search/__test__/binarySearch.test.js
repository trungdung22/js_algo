import binarySearch from '../binarySearch';

describe('binarySearch', () => {
  it('should search number in sorted array', () => {
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1, 2], 1)).toBe(0);
    expect(binarySearch([1, 2], 2)).toBe(1);
  });

  it('should search key in sorted dict', () => {
    const sortedArrayOfObjects = [
      { key: 1, value: 'value1' },
      { key: 2, value: 'value2' },
      { key: 3, value: 'value3' },
    ];

    const customComparator = (a, b) => {
      if (a.key === b.key) return 0;
      return a.key < b.key ? -1 : 1;
    };

    expect(binarySearch([], { key: 1 }, customComparator)).toBe(-1);
    expect(binarySearch(sortedArrayOfObjects, { key: 4 }, customComparator)).toBe(-1);
  });
});
