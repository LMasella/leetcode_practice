// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    const words = s.trim().split(' ');
    return words[words.length - 1].length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));