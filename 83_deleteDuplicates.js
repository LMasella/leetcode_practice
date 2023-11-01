// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

// Constraints:
// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    let runner = head;
    while (runner?.next) {
        if (runner.next.val === runner.val) runner.next = runner.next.next;
        else runner = runner.next;
    }
    return head;
}

// const b = new ListNode("b", null);
// const a = new ListNode("a", b);

// let runner = a;

// while(runner) {
//     console.log(runner.val);
//     runner = runner.next;
// }