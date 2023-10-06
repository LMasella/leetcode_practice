// You are given an array of non-overlapping intervals intervals
// where intervals[i] = [starti, endi] represent the start and the end of the ith interval
// and intervals is sorted in ascending order by starti.
// You are also given an interval newInterval = [start, end] that represents the start 
// and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti
// and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Constraints:

// 0 <= intervals.length <= 10^4
// intervals[i].length == 2
// 0 <= starti <= endi <= 10^5
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 10^5

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    let [newStart, newEnd] = newInterval;
    const before = [];
    const after = [];

    for (let interval of intervals) {
        let [currentStart, currentEnd] = interval;

        if (newStart > currentEnd) before.push(interval);
        else if (newEnd < currentStart) after.push(interval);
        else {
            newStart = Math.min(newStart, currentStart);
            newEnd = Math.max(newEnd, currentEnd);
        }
    }
    return [...before, [newStart, newEnd], ...after];
}

console.log(insert([[1,3],[6,9]], [1,12]));