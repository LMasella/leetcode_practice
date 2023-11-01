// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Constraints:
// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums contains distinct values sorted in ascending order.
// -10^4 <= target <= 10^4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let index = Math.floor(Math.random() * nums.length);
    while (nums[index] !== target) {
        if (target < nums[index]) {
            if (index === 0 || nums[index - 1] < target) return index;
            if (nums[index - 1] === target) return index - 1;
            index = Math.floor(Math.random() * (index - 1));
        } else {
            if (index === nums.length - 1 || nums[index + 1] >= target) return index + 1;
            index = Math.floor(Math.random() * (nums.length - index - 1) + index + 1);
        }
    }
    return index;
}

console.log(searchInsert([0, 5, 7], 1));