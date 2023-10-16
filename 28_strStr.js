// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

// Constraints:
// 1 <= haystack.length, needle.length <= 10^4
// haystack and needle consist of only lowercase English characters.



/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (needle.length === 1) return i;
            for (let j = 1; j < needle.length; j++) {
                if (haystack[i+j] !== needle[j]) {
                    break;
                }
                if (j === needle.length - 1) return i;
            }
        }
    }
    return -1;
}

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr2(haystack, needle) {
    return haystack.search(needle);
}

console.log(strStr("howdy", "y"));