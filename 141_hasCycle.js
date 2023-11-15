// 141. Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again
// by continuously following the next pointer. Internally, pos is used to denote the index of the node 
// that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Constraints:
// The number of the nodes in the list is in the range [0, 10^4].
// -10^5 <= Node.val <= 10^5
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) { // O(1) memory
    let runner = head;
    while (runner && runner.next) {
        head = head.next;
        runner = runner.next.next;
        if (head === runner) return true;
    }
    return false;
}

function hasCycle2(head) {
    const visitedNodes = new Set();
    while (head) {
        if (visitedNodes.has(head)) return true;
        visitedNodes.add(head);
        head = head.next;
    }
    return false;
}