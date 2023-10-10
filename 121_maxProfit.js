// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day
// in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    if (prices.length < 2) return 0;
    let left = 0;
    let right = 1;
    let profit = 0;
    while (right < prices.length) {
        if (prices[right] - prices[left] > profit) profit = prices[right] - prices[left];
        if (prices[right] < prices[left]) left = right;
        right++;
    }
    return profit;
}


console.log(maxProfit([19, 50, 1, 2, 5]));