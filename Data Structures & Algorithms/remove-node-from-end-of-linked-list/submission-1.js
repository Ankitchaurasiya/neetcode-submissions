/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if(!head || !head.next) return null;

        let len = lengthofList(head);
        if(len === n){
            return head.next;
        }
        let curr = head;
        let i = len - n - 1;
        while(i > 0){
            curr = curr.next;
            i--;
        }
        curr.next = curr.next.next;
        return head;
    }
}
function lengthofList(head){
    let curr = head;
    let count = 0;
    while(curr){
        count++;
        curr = curr.next;
    }
    return count;
}
