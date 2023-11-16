// 118. Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1

// Constraints:
// 1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    const result = [[1]];
    const createRow = prevRow => {
        if (prevRow.length === 1) return [1,1];
        const newRow = [1];
        for (let i = 1; i < prevRow.length; i++) {
            newRow.push(prevRow[i] + prevRow[i - 1]);
        }
        newRow.push(1);
        return newRow;
    }
    for (let i = 1; i < numRows; i++) {
        result.push(createRow(result[i-1]));
    }
    return result;
}