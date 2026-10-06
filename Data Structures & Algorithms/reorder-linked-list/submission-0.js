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
     * @return {void}
     */
    reorderList(head) {
        if(!head || !head.next) return head;
        let prev = null;
        let slow = head;
        let fast = head;
        while(fast && fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = null;
        let first = head;
        let second = reverse(slow);
        console.log(first);
        console.log(second);
        let newList = new ListNode();

        while(first || second){
            if(first){
                newList.next = first;
                newList = newList.next;
                first = first.next;
            }
            if(second){
                newList.next = second;
                newList = newList.next;
                second = second.next;
            }

        }
        return newList.next;
    }
}
    function reverse(head){
        let prev = null;
        let curr = head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        head = prev;
        return prev;
    }
