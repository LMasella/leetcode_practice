// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two one's added together.
// 12 is written as XII, which is simply X + II.
// The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII.
// Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

// Constraints:
// 1 <= num <= 3999

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
    const m = Math.floor(num / 1000);
    num -= m * 1000;
    const cm = Math.floor(num / 900);
    num -= cm * 900;
    const d = Math.floor(num / 500);
    num -= d * 500;
    const cd = Math.floor(num / 400);
    num -= cd * 400;
    const c = Math.floor(num / 100);
    num -= c * 100;
    const xc = Math.floor(num / 90);
    num -= xc * 90;
    const l = Math.floor(num / 50);
    num -= l * 50;
    const xl = Math.floor(num / 40);
    num -= xl * 40;
    const x = Math.floor(num / 10);
    num -= x * 10;
    const ix = Math.floor(num / 9);
    num -= ix * 9;
    const v = Math.floor(num / 5);
    num -= v * 5;
    const iv = Math.floor(num / 4);
    num -= iv * 4;
    const i = Math.floor(num / 1);
    

    return "M".repeat(m) + "CM".repeat(cm) + "D".repeat(d) + "CD".repeat(cd) + "C".repeat(c) + "XC".repeat(xc) + "L".repeat(l) + "XL".repeat(xl) + "X".repeat(x) + "IX".repeat(ix) + "V".repeat(v) + "IV".repeat(iv) + "I".repeat(i);
}

console.log(intToRoman(3999));