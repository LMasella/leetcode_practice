// Given an integer x, return true if x is a palindrome, and false otherwise.

// Constraints:
// -2^31 <= x <= 2^31 - 1

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    const str = x.toString();
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome(12021));