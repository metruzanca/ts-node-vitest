import { twoSum } from "$/lc/1-two-sum";

describe('1-two-sum', () => {
  it('Example 1', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  });
  it('Example 2', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0,1])
  });

  it('Example 3', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1,2])
  });

  it('Negative number', () => {
    expect(twoSum([-3,4,3,90], 0)).toEqual([0, 2])
  });
});
