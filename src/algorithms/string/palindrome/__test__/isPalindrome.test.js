import isPanlindrome from '../isPalindrome';

describe('palindromeTest', () => {
  it('should return whether or not the string is a palindrome', () => {
    expect(isPanlindrome('pop')).toBe(true);

    expect(isPanlindrome('rad')).toBe(false);
  });
});
