// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
    let currentIndex = digits.length - 1;
    digits[currentIndex]++;
    while (digits[currentIndex] === 10) {
        digits[currentIndex] = 0;
        currentIndex--;
        if (currentIndex === -1) {
            digits.unshift(1);
            return digits;
        }
        digits[currentIndex]++;
    }
    return digits;
}

console.log(plusOne([9,9,9]));