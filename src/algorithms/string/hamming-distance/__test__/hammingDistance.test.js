import hammingDistance from '../hammingDistance';

describe('hammingDistance', () => {
  it('should calculate difference between two string', () => {
    expect(hammingDistance('a', 'a')).toBe(0);
    expect(hammingDistance('a', 'b')).toBe(1);
    expect(hammingDistance('abc', 'add')).toBe(2);
  });

  it('should throw an error', () => {
    const compareDifferentLength = () => {
      hammingDistance('a', 'aa');
    };
    expect(compareDifferentLength).toThrowError();
  });
});
