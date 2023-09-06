// https://leetcode.com/problems/two-sum

export function twoSum(nums: number[], target: number): number[] {
  const cache = new Map()
  for(let index = 0; index < nums.length; index++) {
    const current = nums[index]
    const needed = target - current    

    if (cache.has(needed)) {  
      return [cache.get(needed), index]
    }
    cache.set(current, index)
  }
  return [] // for ts
};

/**
 * Submission: https://leetcode.com/problems/two-sum/submissions/1038044177
 * Related:
 *  https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
 */