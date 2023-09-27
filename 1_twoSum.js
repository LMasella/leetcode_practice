// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash.hasOwnProperty((target - nums[i]))) {
            return [i, hash[(target - nums[i])]];
        }
        hash[nums[i]] = i;
    }
    return false;
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;
const nums2 = [3, 2, 4];
const target2 = 6;
const nums3 = [3, 3];
const target3 = 6;

console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));
